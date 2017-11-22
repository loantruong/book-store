const models = require('../models');

/**
 * The Book controller object
 */
function BooksController() {
}

BooksController.prototype.list = function (req, res, next) {
  models.book.findAll().then((books) => {
    res.json(books);
  }).catch((err) => {
    next(err);
  });
};

BooksController.prototype.create = function (req, res, next) {
  res.status(500).send('TODO');
};

BooksController.prototype.update = function (req, res, next) {
  res.status(500).send('TODO');
};

BooksController.prototype.remove = function (req, res, next) {
  res.status(500).send('TODO');
};

module.exports = BooksController;