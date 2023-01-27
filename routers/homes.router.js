const router = require('express').Router()
const {HomesController} = require('../controllers/homes.controller')

const homesController = new HomesController()

router.get('/', homesController.home)

module.exports = router