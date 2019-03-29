// by zhangxinxu welcome to visit my personal website http://www.zhangxinxu.com/
// zxx.drag v1.0 2010-03-23 元素的拖拽实现

var params = {
	left: 0,
	top: 0,
	currentX: 0,
	currentY: 0,
	flag: false
};
//获取相关CSS属性
var getCss = function(o,key){
	return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key]; 	
};

var target, endElement;
/*$(document).ready(function(){
  	$('html').mouseover(function(e){
		//alert(e.which);
		console.log(e.pageY);
	});
});*/
//拖拽的实现
var startDrag = function(bar, target, callback){

	/*if(getCss(target, "left") !== "auto"){
		params.left = getCss(target, "left");
	}
	if(getCss(target, "top") !== "auto"){
		params.top = getCss(target, "top");
	}*/
	//o是移动对象
	$('html').mousedown(function(e){
		endElement = '';
		if (e.target.className.indexOf('mt_base') <= -1) {
			endElement = '';
		};
	});
	bar.on("mousedown",function(event){
		var html = $(event.target).html();
		target.innerHTML = html;
		params.flag = true;
		/*if(!event){
			event = window.event;
			//防止IE文字选中
			bar.onselectstart = function(){
				return false;
			}  
		}*/
		var e = event;
		params.currentX = e.pageX;
		params.currentY = e.pageY;
		target.style.left = parseInt(params.currentX) + "px";
		target.style.top = parseInt(params.currentY) + "px";
		target.style.maxwidth = "180px";
		target.style.wordWrap="break-word";
		target.style.display = "block";


		$('html').mousemove(function(event){
			//console.log(event);
			var e = event ? event: window.event;
			if(params.flag){
				var nowX = e.clientX, nowY = e.clientY;
				var disX = nowX - params.currentX, disY = nowY - params.currentY;
				target.style.left = parseInt(e.pageX) + "px";
				target.style.top = parseInt(e.pageY) + "px";
				target.style.maxwidth = "180px";
				target.style.wordWrap="break-word";
				endElement = e.srcElement || e.target;
			}
			
			if (typeof callback == "function") {
				callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
			}
		});	
	});
	
	/*$("body").on("mousemove",function(event){
		console.log('event:' + event);
	});
	bar.onmousedown = function(event){
		var html = bar.html();
		$("body").append("<div id='jm-mousemove'>" + html + "</div>");
		params.flag = true;
		if(!event){
			event = window.event;
			//防止IE文字选中
			bar.onselectstart = function(){
				return false;
			}  
		}
		var e = event;
		params.currentX = e.clientX;
		params.currentY = e.clientY;
	};*/
	document.onmouseup = function(event){
		params.flag = false;	
		if(getCss(target, "left") !== "auto"){
			params.left = getCss(target, "left");
		}
		if(getCss(target, "top") !== "auto"){
			params.top = getCss(target, "top");
		}
		target.style.display = "none";
		if(endElement){
			if(endElement.tagName.toLowerCase() == "input"){
				$(endElement).val(target.innerText);
			}
			if(endElement.tagName.toLowerCase() == "textarea"){
				$(endElement).val(target.innerText);
			}
			//$(endElement).val(target.innerHTML).html(target.innerHTML);
		}
	};
	/*document.onmousemove = function(event){
		var e = event ? event: window.event;
		if(params.flag){
			var nowX = e.clientX, nowY = e.clientY;
			var disX = nowX - params.currentX, disY = nowY - params.currentY;
			target.style.left = parseInt(params.left) + disX + "px";
			target.style.top = parseInt(params.top) + disY + "px";
		}
		
		if (typeof callback == "function") {
			callback(parseInt(params.left) + disX, parseInt(params.top) + disY);
		}
	}	*/
};