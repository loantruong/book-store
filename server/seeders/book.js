'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('books', [{
      isbn: '46565677',
      title: `The Handmaid's Tale book`,
      author: 'Margaret Atwood',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo eros, iaculis ac odio non, malesuada pellentesque urna. Curabitur sagittis luctus augue eget rutrum. ',
      imageUrl: 'http://www.gibertjoseph.com/skin/frontend/enterprise/gibertjoseph/img/cadre_occasion.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      isbn: '4659897',
      title: `book 2`,
      author: 'author 2',
      resume: 'Consectetur adipiscing elit. Nulla justo eros, iaculis ac odio non, malesuada pellentesque urna. Curabitur sagittis luctus augue eget rutrum. ',
      imageUrl: 'http://images.gibertjoseph.com/media/catalog/product/cache/1/image/250x250/9df78eab33525d08d6e5fb8d27136e95/8/1/81gidodkyal.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      isbn: '466665677',
      title: `book3`,
      author: 'author 3',
      resume: 'Nulla justo eros, iaculis ac odio non, malesuada pellentesque urna. Curabitur sagittis luctus augue eget rutrum. ',
      imageUrl: 'http://images.gibertjoseph.com/media/catalog/product/cache/1/image/250x250/9df78eab33525d08d6e5fb8d27136e95/i/758/9782810005758_1_75.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      isbn: '465657657',
      title: `book 4`,
      author: 'author 4',
      resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla justo eros, iaculis ac odio non, malesuada pellentesque urna. Curabitur sagittis luctus augue eget rutrum. ',
      imageUrl: 'http://images.gibertjoseph.com/media/catalog/product/cache/1/image/250x250/9df78eab33525d08d6e5fb8d27136e95/i/161/9782072746161_1_75.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('recipes', null, {});
  }
};