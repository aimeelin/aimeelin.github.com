// JavaScript Document

$(function() {
		$('.carousel').carousel({
        interval: 2000
        });				
		
});
	
function changeSkinBlue(){	
		$(".mynav").css("background","#428bca");
		$(".panel-heading").css("background","#428bca");
		$(".panel-heading").css("border-color","#428bca");
		$(".panel-primary").css("border-color","#428bca");
		$(".panel-default").css("border-color","#428bca");
		$(".thumbnail").css("border-color","#428bca");
}
function changeSkinGreen(){	
		$(".mynav").css("background","green");
		$(".panel-heading").css("background","green");
		$(".panel-primary").css("border-color","green");
		$(".panel-primary").css("border-color","green");
		$(".panel-default").css("border-color","green");
		$(".thumbnail").css("border-color","green");
}
function changeSkinPink(){	
		$(".mynav").css("background","pink");
		$(".panel-heading").css("background","pink");
		$(".panel-heading").css("border-color","pink");
		$(".panel-primary").css("border-color","pink");
		$(".panel-default").css("border-color","pink");
		$(".thumbnail").css("border-color","pink");
}

//jquery 取url参数和在url加参数
(function ($) {
 $.extend({
  Request: function (m) {
   var sValue = location.search.match(new RegExp("[\?\&]" + m + "=([^\&]*)(\&?)", "i"));
   return sValue ? sValue[1] : sValue;
  },
  UrlUpdateParams: function (url, name, value) {
   var r = url;
   if (r != null && r != 'undefined' && r != "") {
    value = encodeURIComponent(value);
    var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)");
    var tmp = name + "=" + value;
    if (url.match(reg) != null) {
     r = url.replace(eval(reg), tmp);
    }
    else {
     if (url.match("[\?]")) {
      r = url + "&" + tmp;
     } else {
      r = url + "?" + tmp;
     }
    }
   }
   return r;
  }
 
 });
})(jQuery);

//使用方法aimeelin.github.io?act=1
//1、取值使用
//$.Request("act") = 1
//2、url加参数,结果window.location.href?mid=11111
$.UrlUpdateParams(window.location.href, "mid", 11111);


	

	
	