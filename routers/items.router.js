const router = require('express').Router()
const {ItemsController} = require('../controllers/items.controller')

const itemsController = new ItemsController()

// GET localhost:port/v1/items
router.get('/items', itemsController.getItems)

// POST localhost:port/v1/items
router.post('/items', itemsController.insertItem)

module.exports = router