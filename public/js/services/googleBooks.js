'use strict';

angular
  .module('app')
  .service('GoogleBooksService', function GoogleBooks($http, $q) {
    'ngInject';

    this.get = (query) => {
      let defer = $q.defer();

      let userSearch = query.search;
      
      $http.get(`/googleBooks/search/${userSearch}`).then((response) => {
        defer.resolve(response.data.items);
      }).catch((error) => {
        defer.reject(error);
      });

      return defer.promise;
    };
  });