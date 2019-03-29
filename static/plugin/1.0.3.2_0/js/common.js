var _tjUrl = "http://icebear.me/";

var _browerVersion = getBrowerVersion() || ""; 

function setCookie(name,value,sec){
	console.log('setCookie'+name,value,sec);
	if(arguments.length>2){
		var expireDate=new Date(new Date().getTime()+sec*1000);
		document.cookie = name + "=" + escape(value) + "; path=/; domain=icebear.me; expires=" + expireDate.toGMTString() ;
	}else
	document.cookie = name + "=" + escape(value) + "; path=/; domain=icebear.me";
}

function getCookie(name){
	console.log('getCookie'+name);
	return (document.cookie.match(new RegExp("(^"+name+"| "+name+")=([^;]*)"))==null)?"":RegExp.$2;
}

function getBrowerVersion(){
	if(KISSY.UA.chrome){
		return 'chrome';
	}else if(KISSY.UA.safari){
		return 'safari';
	}else if(KISSY.UA.firefox){
		return 'mozilla';
	}else if(KISSY.UA.ie){
		return 'ie';
	}else if(KISSY.UA.opera){
		return 'opera';
	}else if(KISSY.UA.mobile){
		return 'mobile';
	}else if(KISSY.UA.ios){
		return 'ios';
	}else if(KISSY.UA.android){
		return 'android';
	}else{
		return 'other';
	}
}

function isMac(){
	var userarg = navigator.userAgent.toLowerCase();
	if(userarg.indexOf('mac os') != -1){
		return true;
	}else{
		return false;
	}
}



// $(document).ready( function() {
//   var $draggable = $('.mt_base').draggabilly();
// });
