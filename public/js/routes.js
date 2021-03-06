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
      url: '/result/:search',
      component: 'resultSearch',
      params: {
        search: null
      },
      resolve: {
        books: (GoogleBooksService, $transition$) => {
          return GoogleBooksService.get({
            search: $transition$.params().search
          });
        }
      }
    })
    .state('instruction', {
      url: '/instructions',
      component: 'instructions'
    });

  $urlRouterProvider.otherwise('/home');
});
