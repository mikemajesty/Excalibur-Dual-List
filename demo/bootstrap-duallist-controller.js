(angular);
(function(angular) {
'use strict';
angular.module('app')
  .controller('BoostrapDualListController', ['$scope', ($scope) => {
      console.log('teste')
      $scope.options = {
        title: 'Demo: your title',
        helpMessage: 'Demo: your help message',
        orderProperty: '[name, category]',
        items: [
          { 'category': 'FF9', 'name': 'Zidane' },
          { 'category': 'FF9', 'name': 'Garnet' },
          { 'category': 'FF9', 'name': 'Vivi' },

          { 'category': 'FF8', 'name': 'Squall Leonhart' },
          { 'category': 'FF8', 'name': 'Quistis Trepe' },
          { 'category': 'FF8', 'name': 'Zell Dincht' },

          { 'category': 'FF7', 'name': 'Cloud Strife' },
          { 'category': 'FF7', 'name': 'Aerith Gainsborough' },
          { 'category': 'FF7', 'name': 'Vincent Valentine' },

        ],
        categories: [
          { 'name': 'FF9' },
          { 'name': 'FF8' },
          { 'name': 'FF7' }
        ],
        selectedItems: []
      };
			
  }]);
})(window.angular);