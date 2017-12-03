'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/home',
      component: 'home',
      resolve: {
        books: (BooksService) => BooksService.query().$promise
      }
    })
    .state('addBook', {
      url: '/addbook',
      component: 'addBook'
    })
    .state('details', {
      url: '/details/:id',
      component: 'bookDetails',
      resolve: {
        books: (BooksService, $transition$) => {
          return BooksService.get({
            id: $transition$.params().id
          }).$promise;
        }
      }
    })
    .state('search', {
      url: '/result',
      component: 'resultSearch',
      params: {
        search: null
      },
      resolve: {
        googleBooks: (GoogleBooksService, $stateParams) => GoogleBooksService.get($stateParams).$promise
      }
    })
    .state('instruction', {
      url: '/instructions',
      component: 'instructions'
    });

  $urlRouterProvider.otherwise('/home');
});
