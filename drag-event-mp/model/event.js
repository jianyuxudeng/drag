function eventType(){
	var ua = navigator.userAgent;
	var isMobile = ua.indexOf('Mobile')>0?true:false;
	var handleStart = !isMobile?'mousedown':'touchstart';
	var handleMove = !isMobile?'mousemove':'touchmove';
	var handleLeave = !isMobile?'mouseleave':'touchend';
	var handleUp = !isMobile?'mouseup':'touchcancel';   
	return {handleStart:handleStart,handleMove:handleMove,handleLeave:handleLeave,handleUp:handleUp,isMobile:isMobile}
}

function handleType(obj,eventType,callback,syType){	
	var ua = navigator.userAgent;
	var doc = document.querySelector(obj);
	var isAttac = obj.attachEvent?true:false;
	var isMobile = ua.indexOf('Mobile')>0?true:false;
	var isTouch = eventType=="touchstart" ||  eventType=="touchmove" || eventType=="touchend" || eventType=="touchcancel"?true:false;
	var handleType = isAttac?doc.attachEvent(eventType,function(e){
		var touchs = isTouch?(isMobile?e.targetTouches[0]:e):e
		callback(touchs)
	}):doc.addEventListener(eventType,function(e){
		var touchs = isTouch?(isMobile?e.targetTouches[0]:e):e
		callback(touchs)
	},syType);
	return {handleType:handleType};
}


exports.eventType = eventType();
exports.handleType = handleType;