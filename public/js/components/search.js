'use strict';

angular
  .module('app')
  .component('search', {
    templateUrl: '/js/components/search.html',

    controller: function(GoogleBooksService, $log, $state) {

      this.$onInit = () => {
        $log.info('search component init');
      };

      this.getBooks = (query) => {
          this.query = query
          $state.go('search', {
            search: query
          });
      };

    }
  });
