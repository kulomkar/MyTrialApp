angular.module('dndWithD3App').factory('storage', ['$window',
function($window) {
	/**
	 * Global Vars
	 */
	var storage = ( typeof $window.localStorage === 'undefined') ? undefined : $window.localStorage;

	//private util methods for adding, retrive, and remove items.
	var utils = {
		parseItem : function(res) {
			var val;
			val = angular.fromJson(res);
			return val;
		},
		set : function(storeName, value) {
			var saver = angular.toJson(value);
			storage.setItem(storeName, saver);
		},
		get : function(store) {
			var item = storage.getItem(store);
			return utils.parseItem(item);
		},
		remove : function(store) {
			storage.removeItem(store);
			return true;
		}
	};
	
	//accessible members from controller
	var offlineStore = {
		addLSItem : function($scope, storeName, props) {
			utils.set(storeName, props);
		},
		getLSItem : function(store) {
			return utils.get(store);
		},
		clearAll : function() {
			storage.clear();
		}
	};
	return offlineStore;
}]);