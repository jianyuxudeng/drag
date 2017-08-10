import {eventType,handleType} from './model/event';

function drag(obj){
	var sx,ex,mx,move=false,left,doc,top,sy,my;
	
	handleType(obj,eventType.handleStart,function(e){
		move = true;
		doc = e.target;
		left = doc.offsetLeft;
		top = doc.offsetTop;
		sx = e.pageX;
		sy = e.pageY;
	},false).handleType;
	
	handleType(obj,eventType.handleMove,function(e){
		if(move){
			mx = e.pageX-sx+left;
			my = e.pageY-sy+top
			doc.style.left = mx +"px";
			doc.style.top = my + "px";
		}
	},false).handleType
	
	handleType(obj,eventType.handleLeave,function(e){
		move = false;
	},false).handleType
	
	handleType(obj,eventType.handleUp,function(e){
		move = false;
	},false).handleType
}

exports.eventType = eventType;
exports.handleType = handleType;
exports.drag = drag;
