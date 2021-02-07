'use strict'
const bcrypt = require('bcrypt')

class Password {
    static hashPassword = ((password)=> {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        return hash
    })
    
    static comparePassword = ((password, salt)=> {
        const hash = bcrypt.compareSync(password, salt)
        return hash
    })

}
module.exports = Password