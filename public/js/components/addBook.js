'use strict';

angular.module('app')

  .component('addBook', {

    templateUrl: './addBook.html',

    controller: function ($log, BooksService) {
      'ngInject';

      this.$onInit = () => {
        $log.info('addBook component init');
      };
    }
  });