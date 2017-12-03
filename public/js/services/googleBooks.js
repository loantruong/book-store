'use strict';

angular
  .module('app')
  .service('GoogleBooksService', function GoogleBooks($http, $q) {
    'ngInject';

    this.get = (query) => {
      let defer = $q.defer();
  
      $http.get(`/googleBooks/search/${query}`)
      .then((response) => {
        defer.resolve(response.data);
      }).catch((error) => {
        defer.reject(error);
      })
    }
  });