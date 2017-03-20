(function(angular) {
  'use strict';
  angular.module('app')
    .controller('BoostrapDualListController', ['$scope', '$filter', function($scope, $filter) {

      var items = [
        { 'category': 'FF9', 'name': 'Zidane' },
        { 'category': 'FF9', 'name': 'Garnet' },
        { 'category': 'FF9', 'name': 'Vivi' },

        { 'category': 'FF8', 'name': 'Squall Leonhart' },
        { 'category': 'FF8', 'name': 'Quistis Trepe' },
        { 'category': 'FF8', 'name': 'Zell Dincht' },

        { 'category': 'FF7', 'name': 'Cloud Strife' },
        { 'category': 'FF7', 'name': 'Aerith Gainsborough' },
        { 'category': 'FF7', 'name': 'Vincent Valentine' },

      ];

      var allCategories = items.map( function (item) { return item.category; });

      var uniqueCategories = unique(allCategories);

      console.log('teste', uniqueCategories)

      $scope.options = {
        title: 'Demo: your title',
        helpMessage: 'Demo: your help message',
        orderProperty: '[category, name]',
        items: items,
        categories: uniqueCategories,
        selectedItems: []
      };

    }]);

  function unique(list) {
    return list.filter(function(item, pos) {
      return list.indexOf(item) == pos;
    });
  }

})(window.angular);