const User = require('./users.model')
const Product = require('./products.model')
const sequelize = require('./sequelize')

Product.belongsTo(User, {
  as: 'owner',
  foreignKey: 'user_id',
})

User.hasMany(Product, {
  as: 'products'
})

module.exports = {
  User,
  Product,
  sequelize
}