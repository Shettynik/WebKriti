const ErrorResponse = require("../utils/errorResponse");
const mysqlConnection = require("../middlewares/db");

exports.addMember = async(req, res, next) => {
    const councilName = req.params.councilName;
    try {
        const sql = "INSERT INTO Members(name, username, password, councilName) VALUES(?,?,?,?)";
        const info = await mysqlConnection.execute(sql, [req.body.name, req.body.username, req.body.password, councilName]);
        res.status(200).json({
            success: true,
            data: "Member added successfully!!"
        })
    } catch (error) {
        next(new ErrorResponse(`Error: ${error.message}`, 501))
    }
}

exports.getMember = async(req, res, next) => {
    const councilName = req.params.councilName;
    try {
        const sql = "SELECT * FROM Members WHERE councilName=?";
        const info = await mysqlConnection.query(sql, [councilName]);
        res.status(200).json({
            success: true,
            members: info[0]
        });
    } catch (error) {
        next(new ErrorResponse(`Error: ${error.message}`, 501))
    }
}