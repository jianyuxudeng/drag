这个插件主要是封装了手机端和pc端浏览器事件兼容和拖动效果

import {drag,handleType,eventType} from 'drag-event-mp';


<p>实例化拖拽操作；</p>
<p>handleType</p>
<p>handleType({obj:document,eventType:event,callback:callback,syType:false}).handleType实例化事件点击。兼容模式</p>
<p>eventType;</p>
<p>handleStart,handleMove,handleLeave,handleUp 事件兼容，兼容pc端和mobile端；</p>
<p>对应mousedown,touchstart;mousemove,touchmove,mouseleave,touchend,mouseup,touchcancel;</p>
<p>isMobile 判断是否是手机浏览器</p>

</p>drag({obj:obj,eobj:eobj,clone:true,type:double,moveCallback:moveCallback,endCallback:endCallback,class:class})<p>
<p>obj:拖动元素</p>
<p>eobj:拖动到目标元素</p>
<p>config:json格式；包含conig={clone:true or false 拖动元素是否是clone方式放入目标元素里面还是本身放置, type:double or others 是否开启拖动元素到另外一个元素里面, class:class name 拖动结束之后拖动元素的动画效果}</p>
