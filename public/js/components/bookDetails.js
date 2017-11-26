'use strict';

angular.module('app')

  .component('bookDetails', {

    templateUrl: 'js/components/bookDetails.html',

    bindings: {
      books: '<'
    },

    controller: function ($log, $state, BooksService) {

      this.$onInit = () => {
        $log.info('BooksDetails component init');
      };

      this.delete = () => {
        BooksService.delete({
          id: this.books.id
        }).$promise.then(() => {
          $state.go('home');
        }).catch((error) => {
          this.error = error;
        });
      };
    }

  });