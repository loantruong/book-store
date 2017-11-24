'use strict';

angular.module('app')

  .component('bookDetails', {

    templateUrl: 'js/components/book-details.html',

    bindings: {
      details: '<'
    },

    controller: function ($log, $state, BooksService) {

      this.$onInit = () => {
        $log.info('BooksDetails component init');
      };
    }

  });