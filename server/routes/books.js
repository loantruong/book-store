const BooksController = require('../controllers/books');
const GoogleBooksController = require('../controllers/googleBooks');

module.exports = function (express) {

  let controller = new BooksController();
  let googleBooksController = new GoogleBooksController();
  let router = express.Router();

  router.get('/', (req, res, next) => {
    return controller.list(req, res, next);
  });

  router.get('/:search', (req, res, next) => {
    return googleBooksController.search(req, res, next);
  });

  router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next);
  });

  router.post('/', (req, res, next) => {
    return controller.create(req, res, next);
  });

  router.delete('/:id', (req, res, next) => {
    return controller.delete(req, res, next);
  });

  return router;
};