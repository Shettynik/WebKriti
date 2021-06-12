const ErrorResponse = require("../utils/errorResponse");
const mysqlConnection  = require("../middlewares/db");
const jwt = require("jsonwebtoken");

exports.Login = async (req, res, next) => {
    const user = req.body;
    try {
        const TableName = user.role==="admin" ? "Admins" : "Members";
        const sql = `SELECT * FROM ${TableName} WHERE username=? and password=?`;
        const info = await mysqlConnection.query(sql, [user.username, user.password]);
        if(info[0].length != 1){
            return next(new ErrorResponse(`${user.role} not found`, 404))
        }
        getToken(info[0], res)
    } catch (error) {
        next(new ErrorResponse("No user found", 404))
    }
}

const getToken = async(user, res) => {

    const token = jwt.sign({id: user.id}, "caaa638dcb0bb8d8cfdb0d5e1cb69bcb4465cc3349aa40993fd8a4a03fc84e3bd7cb1a", {expiresIn: "1h"});
    // console.log(token)
    res.status(200).json({
        success: true,
        token: token,
        user: user
    });
}