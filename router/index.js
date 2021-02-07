const express = require('express').Router
const router = express()
const UserController = require('../controllers/UsersControllers')
const authentication = require("../middlewares/authentication")

router.post('/user-login', UserController.login)
router.use(authentication)
router.post('/user', UserController.insertUser)

module.exports = router