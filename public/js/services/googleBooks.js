'use strict';

angular
  .module('app')
  .service('GoogleBooksService', function GoogleBooks($http, $q) {
    'ngInject';

    this.get = (query) => {
      let defer = $q.defer();
      
      $http.get('/googleBooks').then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error);
      })
    }
    /* this.get = (book) => {
      
      let defer = $q.defer();

      $http.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`).then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        console.log(error);
        defer.reject(message);
      });
      return defer.promise;
    }; */

  });
