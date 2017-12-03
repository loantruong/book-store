const books = require('google-books-search');
/* const apiUrl = "https://www.googleapis.com/books/v1/volumes?q="; */
/**
 * The Book controller object
 */
function googleBooksController() {
  let options = {
    key: "AIzaSyATJN6kGNOxlU06GL27wQwoMQICvWcXTuc",
    offset: 0,
    limit: 10,
    type: 'books',
    order: 'relevance',
    lang: ''
  };

  googleBooksController.prototype.search = function (req, res, next) {
    books.search().then((books) => {
      res.json(books);
    }).catch((err) => {
      next(err);
    });
  }
}

module.exports = googleBooksController;