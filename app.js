const express = require('express')

const app = express()
const itemRouter = require('./routers/items.router')

// Middleware: request -> middleware -> controller/handler
app.use(express.json()) // contoh fungsi express.json()

// Router
app.use('/v1', itemRouter)

// Design Pattern

// Model (sequelize)

app.use((err, req, res, next) => {
    console.log(err)

    const status = err.status || 500
    const error = err.error || err.message || 'Internal server error'

    return res.status(status).json({
        status: false,
        data: {},
        error: error
    })
})

module.exports = app

// MVC: model - view - controller
// SELECT * FROM "items" WHERE item_id = 1
// SELECT * FROM "items" WHERE item_id = 1 AND item_status = 'active'

// MCR: model - controller - router

// model/repository - controller - service - router