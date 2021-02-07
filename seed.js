'use strict'
const db = require("./config/config");
const users = db.collection("Users");
const fs = require('fs');
const { hashPassword } = require("./helpers/bcrypt");

//get data form userData.json
let data = fs.readFileSync('./data/userData.json', "utf-8")
data = JSON.parse(data)
data.map(el => {
    //hash password all of data
    el.password = hashPassword(el.password)
    return el
})

//input data to db
const inputData = async () => {
    try {
        await users.insertMany(data)
        console.log("input data success")
        process.exit()
    } catch {
        console.log("input data failed")
    }
}

if (process.argv[2] === "-i") {
    inputData()
}
