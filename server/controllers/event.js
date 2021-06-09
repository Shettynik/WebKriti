const mysqlConnection = require("../middlewares/db");
const ErrorResponse = require("../utils/errorResponse");

exports.eventInfo = async(req, res, next) => {
    const councilName = req.params.councilName;
    const eventName = req.params.eventName;
    const sql = `SELECT e.eventName, e.eventDescription, e.eventReport
     , i.image FROM Events as e INNER JOIN eventImages
     as i ON e.councilName = i.councilName WHERE i.eventName=? AND i.councilName=?`
     try {
         const eventInfo = await mysqlConnection.query(sql, [eventName, councilName])
     } catch (error) {
         next(new ErrorResponse(error.message, 401))
     }
}

exports.createEvent = async(req, res, next) => {

}