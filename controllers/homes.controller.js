class HomesController {
    async home(req, res, next) {
        return res.status(200).render('index')
    }
}

module.exports = {HomesController}