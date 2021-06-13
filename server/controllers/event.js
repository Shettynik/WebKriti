const mysqlConnection = require("../middlewares/db");
const UploadStorage = require("../middlewares/uploadImage");
const ErrorResponse = require("../utils/errorResponse");

exports.eventInfo = async(req, res, next) => {
    const councilName = req.params.councilName;
    const eventName = req.params.eventName;
    const sql = `SELECT eventName, eventDescription, eventReport
     FROM Events WHERE eventName=? AND councilName=?`
     try {
        const eventInfo = await mysqlConnection.query(sql, [eventName, councilName]);
        res.status(200).json({
            success: true,
            data: eventInfo[0]
        });
     } catch (error) {
         next(new ErrorResponse(error.message, 401))
     }
}

exports.eventImages = async (req, res, next) => {
    const councilName = req.params.councilName;
    const eventName = req.params.eventName;
    const sql = `SELECT image FROM eventImages WHERE eventName=? AND councilName=?`
     try {
        const eventImages = await mysqlConnection.query(sql, [eventName, councilName]);
        res.status(200).json({
            success: true,
            data: eventImages[0]
        });
     } catch (error) {
         next(new ErrorResponse(error.message, 401))
     }
}

exports.createEvent = async(req, res, next) => {
    const info = {
        councilName: req.query.councilName,
        eventName: req.query.title,
        eventDescription: req.query.description,
        eventReport: req.query.report,
    }
    UploadStorage(req, res, async (err) => {
        try {
            if(err){
                next(new ErrorResponse(err.message, 502))
            }
            console.log(info)
            // console.log(req.file.location)
            const sql = `INSERT INTO Events(eventName,councilName, eventDescription, eventReport) VALUES(?,?,?,?)`;
            const event = await mysqlConnection.query(sql, [info.eventName, info.councilName, info.eventDescription, info.eventReport]);
            console.log(event)
            const sql2 = `INSERT INTO eventImages(councilName, eventName, image) VALUES(?,?,?)`;
            const eventImage = await mysqlConnection.query(sql2, [info.councilName, info.eventName, req.file.location]);
            console.log(eventImage);
            res.status(200).json({
                success: true,
                response: req.query
            })
        } catch (error) {
            next(new ErrorResponse(error.message, 502))
        }
    })
}

exports.deleteEvent = async(req, res, next) => {
    try {
        const sql = `DELETE Events, eventImages FROM Events INNER JOIN eventImages ON Events.councilName=eventImages.councilName AND Events.eventName= eventImages.eventName WHERE Events.councilName=? AND Events.eventName=?`;
        const eventDelete = await mysqlConnection.query(sql, [req.params.councilName, req.params.eventName]);
        res.status(200).json({
            success: true,
            data: "Event deleted successfully!!"
        })
    } catch (error) {
        next(new ErrorResponse(error.message, 502));
    }
}