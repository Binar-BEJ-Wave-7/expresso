'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('products', [
      {
        name: 'Kopi Americano',
        price: 10000,
        stock: 100,
        sku: 'K0050'
      },
      {
        name: 'Kopi Lelet',
        price: 15000,
        stock: 100,
        sku: 'K0051'
      },
      {
        name: 'Kopi Susu Gula Aren',
        price: 9000,
        stock: 100,
        sku: 'K0052'
      },
      {
        name: 'Kopi Latte',
        price: 12000,
        stock: 100,
        sku: 'K0053'
      },
      {
        name: 'Kopi Luwak',
        price: 18000,
        stock: 100,
        sku: 'K0054'
      },
      {
        name: 'Kopi Arabica',
        price: 9000,
        stock: 100,
        sku: 'K0055'
      },
      {
        name: 'Kopi V60',
        price: 10000,
        stock: 100,
        sku: 'K0056'
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
