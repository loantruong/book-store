'use strict';

angular
  .module('app')
  .component('resultSearch', {
    templateUrl: '/js/components/resultSearch.html',

    bindings: {
      books: '<'
    },

    controller: function ($log, $state) {
      'ngInject';

      this.$onInit = () => {
        $log.info('resultSearch component init');
      };
      this.addBook = () => {
        BooksService.save(this.book).$promise.then((newBook) => {
          $state.go('home');
        }).catch((error) => {
          this.error = error;
        });
      };
    }
  });
