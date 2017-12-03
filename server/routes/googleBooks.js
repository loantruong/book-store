const GoogleBooksController = require('../controllers/googleBooks');

module.exports = function (express) {

  let googleBooksController = new GoogleBooksController();
  let router = express.Router();

  router.get('/search/:search', (req, res, next) => {
    return googleBooksController.search(req, res, next);
  });

  return router;
};