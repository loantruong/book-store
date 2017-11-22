'use strict';

angular.module('app')

  .component('addBook', {

    templateUrl: '/js/components/addBook.html',

    controller: function ($log) {
      'ngInject';

      this.$onInit = () => {
        $log.info('addBook component init');
      };
    }
  });