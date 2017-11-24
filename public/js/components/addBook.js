'use strict';

angular.module('app').component('addBook', {

  templateUrl: '/js/components/addBook.html',

  controller: function ($log, $state, BooksService) {
    'ngInject';

    this.$onInit = () => {
      $log.info('addBook component init');
    };

    this.validate = () => {
      BooksService.save(this.book).$promise.then((newBook) => {
        $state.go('home');
      }).catch((error) => {
        this.error = error;
      });
    };
  }
});