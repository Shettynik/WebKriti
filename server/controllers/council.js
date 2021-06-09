const mysqlConnection = require("../middlewares/db");
const ErrorResponse = require("../utils/errorResponse");


exports.council = async(req, res, next) => {
    const sql = "SELECT * FROM Councils";
    try {
        const councils = await mysqlConnection.query(sql);
        res.send(councils[0]);
    } catch (error) {
        next(new ErrorResponse(error.message, 401));
    }
}

exports.councilInfo = async(req, res, next) => {
    const councilName = req.params.councilName;
    const sql = "SELECT * FROM Councils WHERE Councils.councilName=?"
    try {
        const councilInfo = await mysqlConnection.query(sql,[councilName]);
        res.send(councilInfo[0]);
    } catch (error) {
        next(new ErrorResponse(error.message, 401))
    }
}

exports.councilWithEventNames = async(req, res, next) => {
    const councilName = req.params.councilName;
    const sql = "SELECT * FROM Events WHERE Events.councilName=?"
    try {
        const events = await mysqlConnection.query(sql,[councilName]);
        res.send(events[0]);
    } catch (error) {
        next(new ErrorResponse(error.message, 401))
    }
}

exports.councilAdmins = async(req, res, next) => {
    const councilName = req.params.councilName;
    const sql = "SELECT name, adminImg FROM Admins WHERE Admins.councilName=?"
    try {
        const admins = await mysqlConnection.query(sql,[councilName]);
        res.send(admins[0]);
    } catch (error) {
        next(new ErrorResponse(error.message, 401))
    }
}