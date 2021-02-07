'use strict'
const jwt = require("jsonwebtoken");

class Token {
    static sign(input) {
        const token = jwt.sign(input, process.env.SECRET)
        return token
    }
    static verify(payload) {
        const result = jwt.verify(payload, process.env.SECRET)
        return result
    }
}
module.exports = Token