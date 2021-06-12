const mysqlConnection = require("../middlewares/db");
const ErrorResponse = require("../utils/errorResponse");

exports.eventInfo = async(req, res, next) => {
    const councilName = req.params.councilName;
    const eventName = req.params.eventName;
    const sql = `SELECT eventName, eventDescription, eventReport
     FROM Events  WHERE eventName=? AND councilName=?`
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
    
}