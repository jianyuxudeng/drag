这个插件主要是封装了手机端和pc端浏览器事件兼容和拖动效果

import {drag,handleType,eventType} from 'drag-event-mp';

drag("#id");
实例化拖拽操作；
handleType
handleType(document,event,callback,false).handleType实例化事件点击。兼容模式
eventType;
handleStart,handleMove,handleLeave,handleUp 事件兼容，兼容pc端和mobile端；
对应mousedown,touchstart;mousemove,touchmove,mouseleave,touchend,mouseup,touchcancel;
isMobile 判断是否是手机浏览器
