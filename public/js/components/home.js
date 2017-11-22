'use strict';

angular.module('app')

  .component('home', {

    templateUrl: '/js/components/home.html',

    bindings: {
      books: '<'
    },

    controller: function ($log) {
      'ngInject';

      this.$onInit = () => {
        $log.info('home component init');
      };
    }
  });