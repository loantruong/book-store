const models = require('../models');
const books = require('google-books-search');

/**
 * The Book controller object
 */
function BooksController() {
  BooksController.prototype.list = function (req, res, next) {
    models.book.findAll().then((books) => {
      res.json(books);
    }).catch((err) => {
      next(err);
    });
  };
  
  BooksController.prototype.findOne = function (req, res, next) {
    models.book.findById(req.params.id).then((book) => {
      if (book) {
        res.json(book);
      } else {
        res.sendStatus(404);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
  };
  
  BooksController.prototype.create = function (req, res, next) {
    let result;
    models.book.create(req.body).then((book) => {
      result = book;
    }).then((info) => {
      res.json(result);
    }).catch((err) => {
      res.status(500).send(err);
    });
  };
  
  BooksController.prototype.update = function (req, res, next) {
    models.book.findById(req.params.id).then((book) => {
      if (book) {
        res.json(book);
      } else {
        res.sendStatus(404);
      }
    }).catch((err) => {
      res.status(500).send(err);
    });
  };
  
  BooksController.prototype.delete = function (req, res, next) {
    models.book.findOne({
      where: {
        id: req.params.id
      }
    }).then((book) => {
      return book.destroy();
    }).then(() => {
      res.sendStatus(200);
    }).catch((err) => {
      res.status(500).send(err);
    });
  };
}

module.exports = BooksController;