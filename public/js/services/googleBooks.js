'use strict';

angular
  .module('app')
  .service('GoogleBooksService', function GoogleBooks($http, $q) {
    'ngInject';

    this.get = (query) => {
      let defer = $q.defer();
<<<<<<< HEAD
      
      $http.get(`https://www.googleapis.com/books/v1/volumes?q=/:${query}`)
      .then((response) => {
=======
  
      return $http.get('/googleBooks/search/'+query).then((response) => {
>>>>>>> 827df7ade50bac29ab89ff6e74281fac3dad4128
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error);
      })
    }
  });
