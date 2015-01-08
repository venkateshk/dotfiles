function getCookie(name) {
 var re = new RegExp(name + "=([^;]+)");
 var value = re.exec(document.cookie);
 return (value != null) ? unescape(value[1]) : null;
}
(function() {    
var ad_url;
var tdate = new Date();
var tepochtime = Math.round(tdate.getTime()/1000.0);
var toffset = tdate.getTimezoneOffset();	
var ppb = document.createElement("img");
var mplx_svid=getCookie("svid");
var pat = /\d+\-\d+\-\d+\-\d+/; //define pattern to match placement id 
var scripts = document.getElementsByTagName('script');
for (var i = 0; i < scripts.length; i++) { 
	var scriptSrc = scripts[i].src; 
	if ( scriptSrc.indexOf("adfarm.mediaplex.com") > -1 && scriptSrc.match(pat)) { 
        ad_url = scriptSrc;
        break;
    }
}
var rot_id = ad_url.match(pat);
var pgrp = escape("main:mktg:display:mplx:" + rot_id);
var page = escape("main:mktg:display:mplx:" + rot_id + ":::" + rot_id);
ppb.src = 'https://t.paypal.com/ts?v=0.1&t=' + tepochtime + '&e=mplx_im&pgrp=' + pgrp + '&page=' + page + '&mchn=dp&s=ci&spid=' + escape(mplx_svid) + "&g=" + toffset;
ppb.border = "0";
document.documentElement.firstChild.appendChild(ppb);
})();
