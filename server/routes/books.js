const BooksController = require('../controllers/books');

module.exports = function (express) {

  let controller = new BooksController();
  let router = express.Router();

  router.get('/', (req, res, next) => {
    return controller.list(req, res, next);
  });

  router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next);
  });

  router.post('/', (req, res, next) => {
    return controller.create(req, res, next);
  });

  return router;
};