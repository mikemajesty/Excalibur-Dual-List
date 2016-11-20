angular.module("dualmultiselect", []).directive("dualmultiselect", [function() {
	return {
		restrict: 'E',
		scope: {
			options: '='
		},
		controller: function($scope) {
			$scope.transfer = function(from, to, index) {
				if (index >= 0) {
					to.push(from[index]);
					from.splice(index, 1);
				} else {
					for (var i = 0; i < from.length; i++) {
						to.push(from[i]);
					}
					from.length = 0;
				}
			};
		},
		template: '<div class="dualmultiselect"> <div class="row"> <div class="col-lg-12 col-md-12 col-sm-12"> <h4>{{options.title}} <small>&nbsp;{{options.helpMessage}}</small> </h4> <select class="form-control" ng-model="search"> <option ng-selected="true" value="">All</option> <option value="{{g.name}}" ng-repeat="g in options.categories"> <b>{{g.name | uppercase}}</b> </option> </select> </div> </div> <div class="row"> <div class="col-lg-6 col-md-6 col-sm-6"> <div class="row"> <div class="col-lg-8 col-md-8 col-sm-8 pull-right"> <button type="button" class="btn btn-default btn-xs" ng-click="transfer(options.items, options.selectedItems, -1)"> Move All -> </button> </div> </div> <div class="list"> <ul> <li ng-repeat="item in options.items | filter: search | orderBy: options.orderProperty"> <a href="" ng-click="transfer(options.items, options.selectedItems, options.items.indexOf(item))"> {{item.name}}&nbsp;&rArr;</a> </li> </ul> </div> </div> <div class="col-lg-6 col-md-6 col-sm-6"> <div class="row"> <div class="col-lg-7 col-md-7 col-sm-7"> <button type="button" class="btn btn-default btn-xs pull-right" ng-click="transfer(options.selectedItems, options.items, -1)"> &#60;- Move All </button> </div> </div> <div class="list"> <ul> <li ng-repeat="item in options.selectedItems | orderBy: options.orderProperty"> <a href="" ng-click="transfer(options.selectedItems, options.items, options.selectedItems.indexOf(item))"> &lArr;&nbsp;{{item.category}}-{{item.name}} </a> </li> </ul> </div> </div> </div> </div>'
	};
}]);
