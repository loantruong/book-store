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
    .state({
      name: 'details',
      url: '/details/:id',
      component: 'bookDetails',
      resolve: {
        details: function (BooksService, $transition$) {

          return BooksService.query($transition$.params().id);
        }
      }
    })
    .state('instruction', {
      url: '/instructions',
      component: 'instructions'
    });

  $urlRouterProvider.otherwise('/home');
});
