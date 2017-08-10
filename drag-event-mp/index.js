var eventType = require('./model/event').eventType;
var handleType = require('./model/event').handleType;

function drag(obj,moveCallback,endCallback){
	var sx,ex,mx,move=false,left,doc,top,sy,my;
	var sdoc = document.querySelector(obj);
	var sLeft = sdoc.offsetLeft;
	var sTop = sdoc.offsetTop;
	var sWidth = sdoc.style.width;
	var sHeight = sdoc.style.height;
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
			if(moveCallback){
				moveCallback(e,mx,my,doc)
			}
		}
	},false).handleType
	
	handleType(obj,eventType.handleLeave,function(e){
		move = false;
		if(endCallback){
			endCallback(e,doc);
		}
	},false).handleType
	
	handleType(obj,eventType.handleUp,function(e){
		move = false;
		if(endCallback){
			endCallback(e,doc);
		}
	},false).handleType
}

exports.eventType = eventType;
exports.handleType = handleType;
exports.drag = drag;
