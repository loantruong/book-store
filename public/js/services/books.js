'use strict';

angular.module('app').factory('BooksService', function BooksService($resource) {
  'ngInject';

  return $resource('/books/:id', {
    id: '@id'
  });
});