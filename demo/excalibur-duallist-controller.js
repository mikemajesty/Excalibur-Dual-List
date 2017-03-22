(function(angular) {
  'use strict';
  angular.module('app')
    .controller('ExcaliburDualListController', ['$scope', '$filter', function($scope, $filter) {

      $scope.options = {
        title: 'Demo: your title',
        helpMessage: 'Demo: your help message',
        orderProperty: '[category, name]',
        selectOptions: {initialText: "All", isDisable: true},
        items: [
          { 'category': 'FF8', 'name': 'Squall Leonhart' },
          { 'category': 'FF8', 'name': 'Quistis Trepe' },
          { 'category': 'FF8', 'name': 'Zell Dincht' },

          { 'category': 'FF9', 'name': 'Zidane' },
          { 'category': 'FF9', 'name': 'Garnet' },
          { 'category': 'FF9', 'name': 'Vivi' },



          { 'category': 'FF7', 'name': 'Cloud Strife' },
          { 'category': 'FF7', 'name': 'Aerith Gainsborough' },
          { 'category': 'FF7', 'name': 'Vincent Valentine' },

        ],
        categories: ["FF7", "FF8", "FF9"],
        selectedItems: []
      };

    }]);

})(window.angular);