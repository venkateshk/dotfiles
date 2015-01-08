//var ad_url = 'adfarm.mediaplex.com/ad/ck/15978-198668-1039-4?mpt=1736108736&mpcr=&mpcrset=&mpcr=46583331&mpcrset=root';
//var ad_url = '<mpck/>';
//alert("one");
//var x = document.referrer;
//alert(x);
//alert(ppCampId);
//alert(theMpck);
//alert(user);
//avar ad_url = 'adfarm.mediaplex.com/ad/ck/'+rot_id;
var tdate = new Date();
var tepochtime = Math.round(tdate.getTime()/1000.0);
var toffset = tdate.getTimezoneOffset();
var fpti = document.createElement("script");
//var proto = window.location.protocol;
//var src_url = ((proto.match('https:')) ? '//secure.img-cdn.mediaplex.com' : '//img-cdn.mediaplex.com');
//fpti.src = proto + src_url + '/0/3484/130154/paypal-fpti.js';
//document.documentElement.firstChild.appendChild(fpti);
function getCookie(name) {
 var re = new RegExp(name + "=([^;]+)");
 var value = re.exec(document.cookie);
 return (value != null) ? unescape(value[1]) : null;
}
(function() {    
var ppb = document.createElement("img");
var mplx_svid=getCookie("svid");
var pat = /\d+\-\d+\-\d+\-\d+/; //define pattern to match placement id 
//var rot_id = ad_url.match(pat); //extract placement id from mpck 
var pgrp = escape("main:mktg:display:mplx:" + ppCampId);
var page = escape("main:mktg:display:mplx:" + ppCampId + ":::" + ppCampId);
ppb.src = 'https://t.paypal.com/ts?v=0.1&t=' + tepochtime + '&e=mplx_im&pgrp=' + pgrp + '&page=' + page + '&mchn=dp&s=ci&spid=' + escape(mplx_svid) + "&g=" + toffset;
ppb.border = "0";
document.documentElement.firstChild.appendChild(ppb);
})();
