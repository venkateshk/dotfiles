var ad_url = 'adfarm.mediaplex.com/ad/ck/15978-198668-1039-4?mpt=1736108736&mpcr=&mpcrset=&mpcr=46583331&mpcrset=root';
var tdate = new Date();
var tepochtime = Math.round(tdate.getTime()/1000.0);
var toffset = tdate.getTimezoneOffset();
var fpti = document.createElement("script");
var proto = window.location.protocol;

(function() {    	
	alert("hi");
var ppb = document.createElement("img");
//var mplx_svid=getCookie("svid");
//alert(mplx_svid);

var pat = /\d+\-\d+\-\d+\-\d+/; //define pattern to match placement id 
var rot_id = ad_url.match(pat); //extract placement id from mpck 
var pgrp = escape("main:mktg:display:mplx:" + rot_id);
var page = escape("main:mktg:display:mplx:" + rot_id + ":::" + rot_id);
ppb.src = 'https://t.paypal.com/ts?v=0.1&t=' + tepochtime + '&e=mplx_im&pgrp=' + pgrp + '&page=' + page;
ppb.border = "0";
document.documentElement.firstChild.appendChild(ppb);
})();
