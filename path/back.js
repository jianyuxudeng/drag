import angular from 'angular';

import {bodyInfo} from './body';

var back = angular.module("Home",[]);

back.directive('home',function(){
	return {
		transclude: true,
		restrict:'E',
		templateUrl: 'html/back.html'
	}
}).controller('home',['$scope','myCache',function($scope){
	$scope.value = myCache.get('myValue');
	console.log($scope.value)
	myCache.put('myValue',22);
	$scope.value = myCache.get('myValue');
	console.log($scope.value)
}])

