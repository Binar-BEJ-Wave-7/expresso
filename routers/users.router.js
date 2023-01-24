const router = require('express').Router()
const {UsersController} = require('../controllers/users.controller')

const usersController = new UsersController()

// POST localhost:port/v1/register
router.post('/register',  usersController.register)

module.exports = router