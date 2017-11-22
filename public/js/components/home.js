'use strict';

angular.module('app')

  .component('home', {

    templateUrl: './home.html',

    bindings: {
      books: '<'
    },

    controller: function ($log, BooksService) {
      'ngInject';

      this.$onInit = () => {
        $log.info('home component init');
      };
    }
  });