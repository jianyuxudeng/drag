import {drag,handleType,eventType} from '../drag-event-mp/index.js';


drag({
	obj:"#btn",
	eobj:"#dec",
	type:"double",
	clone:false,
	class:"ani",
	moveCallback:function(){
		console.log("111")
	},
	endCallback:function(){
		console.log("222")
	}
})
