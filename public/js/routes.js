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
    });

  $urlRouterProvider.otherwise('/home');
});