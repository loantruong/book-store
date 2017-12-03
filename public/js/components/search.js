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
        GoogleBooksService.get(query).then((data) => {
          $state.go('search');
        }).catch((error) => {
          this.error = error;
        });
      };
    }
  });
