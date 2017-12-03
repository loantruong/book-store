'use strict';

angular
  .module('app')
  .component('resultSearch', {
    templateUrl: '/js/components/resultSearch.html',

    bindings: {
      googleBooks: '<'
    },

    controller: function ($log, $state) {
      'ngInject';

      this.$onInit = () => {
        $log.info('resultSearch component init');
      };

    }
  });
