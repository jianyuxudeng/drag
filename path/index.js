import {drag,handleType,eventType} from '../drag-event-mp/index';

drag("#btn","#dec",{type:"double",clone:true,class:"ani"},function(e,mx,my,doc){

});

//
//import {bodyInfo} from './body';
//
//
//bodyInfo.controller("index",["$scope","myCache",function($scope,myCache){
//	myCache.put('myValue',55);
//	$scope.msg = "11111"
//	$scope.value = myCache.get('myValue');
//	console.log(	$scope.value )
//}])
