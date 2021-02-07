const  db  = require("../config/config");
const users = db.collection("Users");

class User {
  static login(user) {
      return users.findOne({username: user.username})
  }
  static findAll() {
    return users.find().toArray()
  }
  static insert(newUser) {
      return users.insertOne(newUser)
  }
}

module.exports = User;