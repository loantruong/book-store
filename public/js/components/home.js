'use strict';

angular.module('app').component('home', {

  templateUrl: '/js/components/home.html',

  bindings: {
    books: '<'
  },

  controller: function ($log, $state) {
    'ngInject';

    this.$onInit = () => {
      $log.info('home component init');
    };

    this.displayDetails = (id) => {
      $state.go('details', {
        id: id
      });
    };
  }
});