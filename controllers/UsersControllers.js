"use strict"
const User = require("../models/UsersModel");
const Token = require("../helpers/jwt")
const Password = require("../helpers/bcrypt")

class UserController {
    //input user in database
    static async login(req, res) {
        try {
            const user = {
                username: req.body.username,
                password: req.body.password
            }
            const data = await User.login(user)
            if (!data) {
                res.status(400).json({
                    name: "Bad Request",
                    msg: "login failed"
                })
            }
            else if (!Password.comparePassword(user.password, data.password)) {
                res.status(400).json({
                    name: "Bad Request",
                    msg: "login failed"
                })
            } else {
                const access_token = Token.sign({ _id: data._id, username: data.username })
                data.password = undefined
                data.access_token = access_token
                if (data.role === "admin") {
                    let payload = await User.findAll()
                    let arr = []
                    payload.forEach(el => {
                        if (el.username !== data.username) {
                            arr.push(el)
                        }
                        el.password = undefined
                    })
                    arr.push(data)
                    res.status(201).json(arr)
                } else {
                    res.status(201).json(data)
                }
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async insertUser(req, res) {
        try {
            const newUser = {
                full_name: req.body.full_name,
                username: req.body.username,
                password: Password.hashPassword(req.body.password),
                age: req.body.age,
                city: req.body.city,
                role: req.body.role
            }
            const inputData = await User.insert(newUser)
            res.status(201).json(inputData.ops[0])
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = UserController;