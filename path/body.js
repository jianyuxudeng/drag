import angular from 'angular';
import './back';
let bodyInfo = angular.module("app",[]);

bodyInfo.factory("myCache",function($cacheFactory){
	return $cacheFactory("myCache",{capacity:5});
})

exports.bodyInfo = bodyInfo;