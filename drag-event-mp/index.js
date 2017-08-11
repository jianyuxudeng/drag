var eventType = require('./model/event').eventType;
var handleType = require('./model/event').handleType;

function drag(obj,eobj,config,moveCallback,endCallback){
	var sx,ex,mx,move=false,left,doc,top,sy,my,newDom;
	var sdoc = document.querySelector(obj);
	var sLeft = sdoc.offsetLeft;
	var sTop = sdoc.offsetTop;
	var sWidth = sdoc.offsetWidth;
	var sHeight = sdoc.offsetHeight;
	var edoc = document.querySelector(eobj);
	var eLeft = edoc.offsetLeft;
	var eTop = edoc.offsetTop;
	var eWidth = edoc.offsetWidth;
	var eHeight = edoc.offsetHeight;
	var parentDoc = sdoc.parentNode;
	handleType(obj,eventType.handleStart,function(e){		
		doc = e.target;
		left = doc.offsetLeft;
		top = doc.offsetTop;
		sx = e.pageX;
		sy = e.pageY;
		if(config.type=="double"){
		     if(left+sWidth>eLeft&&left<eLeft+eWidth&&top+sHeight>eTop&&top<eTop+eHeight){
		     	move = false;
		     }else{
		     	move = true;
		     };
		     if(doc.getAttribute("has-move")=='yes'){
		     	move=false;
		     }
		}else{
			move = true;
		}
	},false).handleType;
	
	handleType(obj,eventType.handleMove,function(e){
		if(move){
			mx = e.pageX-sx+left;
			my = e.pageY-sy+top
			doc.style.left = mx +"px";
			doc.style.top = my + "px";
			if(config.type=="double"){
			     if(mx+sWidth>eLeft&&mx<eLeft+eWidth&&my+sHeight>eTop&&my<eTop+eHeight){
			     	move = false;
			     	if(config.clone==true){
			     	    newDom = doc.cloneNode(true);
			     		doc.style.left = sLeft+"px";
		     	        doc.style.top = sTop+"px";
		     	        doc.setAttribute("has-move",'yes');
		     	        	newDom.id = newDom.id+"new";
			     	}else{
			     	    newDom = doc;
			     	}
			     	if(typeof(config.class)!="undefined"){
			     		newDom.setAttribute("class",config.class+" "+newDom.className);
			     	}
			     	newDom.style.left = 0;
			     	newDom.style.top = 0;
			     	edoc.appendChild(newDom);
			     	if(newDom){
						backFun(newDom,sLeft,sTop,parentDoc,config,doc);
					}
			     }else{
			     	move = true
			     }
			}else{
				move = true;
			}
			if(moveCallback){
				moveCallback(e,mx,my,doc)
			}
		}
	},false).handleType
	
	handleType(obj,eventType.handleLeave,function(e){
		move = false;
		if(config.type=="double"){
		     if(mx+sWidth>eLeft&&mx<eLeft+eWidth&&my+sHeight>eTop&&my<eTop+eHeight){
		     }else{
		     	doc.style.left = sLeft+"px";
		     	doc.style.top = sTop+"px";
		     }
		}
		if(endCallback){
			endCallback(e,doc);
		}
		
	},false).handleType
	
	handleType(obj,eventType.handleUp,function(e){
		move = false;
		if(config.type=="double"){
		     if(mx+sWidth>eLeft&&mx<eLeft+eWidth&&my+sHeight>eTop&&my<eTop+eHeight){
		     }else{
		     	doc.style.left = sLeft+"px";
		     	doc.style.top = sTop+"px";
		     }
		}
		if(endCallback){
			endCallback(e,doc);
		}
	},false).handleType
}


function backFun(newDom,left,top,parentDoc,config,doc){
	var id = "#"+newDom.id;
	handleType(id,"click",function(e){
		var nDoc = document.querySelector(id);
		nDoc.style.left = left+"px";
		nDoc.style.top = top+"px";
		nDoc.className = nDoc.className.replace(config.class,"");
		if(config.clone==true){
			nDoc.remove();
			doc.removeAttribute("has-move");
		}else{
			parentDoc.appendChild(nDoc);
		}	
	},false).handleType
}

exports.eventType = eventType;
exports.handleType = handleType;
exports.drag = drag;
