const ErrorResponse = require("../helpers/error.helper")
const Response = require("../helpers/response.helper")
const { Product, User, sequelize } = require('../database/models')

class ItemsController {
    async getItems(req, res, next) {
        try {
            const { page = '1', limit = '3'} = req.query
    
            const pageInt = Number(page)
            const limitInt = Number(limit)
            const offset = (pageInt - 1) * limitInt
    
            const data = await Product.findAll({
                attributes: ['id', 'name', 'price', 'stock', 'sku'],
                limit: limitInt,
                offset: offset
            })
    
            if (data.length === 0) {
                throw new ErrorResponse(404, 'Data tidak ditemukan')
            }
    
            return new Response(res, 200, data)
        } catch (error) {
            next(error)
        }
    }
    
    insertItem(req, res, next) {
        try {
            const data = {
                item_id: 10,
                item_name: req.body.item_name
            }

            return new Response(res, 201, data)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = {
    ItemsController
}