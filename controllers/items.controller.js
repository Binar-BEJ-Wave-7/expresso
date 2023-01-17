const ErrorResponse = require("../helpers/error.helper")
const Response = require("../helpers/response.helper")

class ItemsController {
    getItems(req, res, next) {
        const data = [
            {
                item_id: 1,
                item_name: 'Botol Kecap'
            },
            {
                item_id: 2,
                item_name: 'Botol Saus'
            }
        ]

        return new Response(res, 200, data)
    }
    
    insertItem(req, res, next) {
        try {
            // console.log(req.body)       // request body
            // console.log(req.params)     // request url params
            // console.log(req.query)      // request query param
            // console.log(req.headers)    // request header
        
            // logic insert ke db

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