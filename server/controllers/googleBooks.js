const https = require('https');
const books = require('google-books-search');
const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
/**
 * The Book controller object
 */
function googleBooksController() {
  googleBooksController.prototype.search = function (req, res, next) {
    
      https.get(`${apiUrl}${req.params.search}`, (result) => {
      let data = '';
    
      result.on('data', (chunk) => {
        data += chunk;
      });
    
      result.on('end', () => {
        res.send(JSON.parse(data));
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
  }

}

module.exports = googleBooksController;