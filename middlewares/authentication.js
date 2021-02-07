'use strict'
const Token = require('../helpers/jwt')
const db = require("../config/config");
const users = db.collection("Users");
const { ObjectID } = require("mongodb");

const authentication = (async (req, res, next) => {
    try {
        const decoded = Token.verify(req.headers.access_token)
        const data = await users.findOne({ _id: ObjectID(decoded._id) })
        if (data.role === "admin") {
            next()
        } else {
            res.status(401).json({
                name: "unauthorized",
                message: "Cannot Access"
            })
        }
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = authentication