'use strict';

angular.module('app')

  .config(function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'home',
        resolve: {
          books: function (BooksService) {
            return BooksService.getBooks();
          }
        }
      })
      .state('add-book', {
        url: '/addbook',
        component: 'addBook'
      });

    $urlRouterProvider.otherwise('/home');
  });