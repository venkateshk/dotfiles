var ad_url;
var pattern = /\d+\-\d+\-\d+\-\d+/;
var scripts = document.getElementsByTagName('script');
for (var i = 0; i < scripts.length; i++) { 
	var scriptSrc = scripts[i].src; 
	if ( scriptSrc.indexOf("adfarm.mediaplex.com") > -1 && scriptSrc.match(pattern)) { 
        ad_url = scriptSrc;
        break;
    }
}
var tdate = new Date();
var tepochtime = Math.round(tdate.getTime()/1000.0);
var toffset = tdate.getTimezoneOffset();
var fpti = document.createElement("script");
var proto = window.location.protocol;
var src_url = ((proto.match('https:')) ? '//secure.img-cdn.mediaplex.com' : '//img-cdn.mediaplex.com');
fpti.src = proto + src_url + '/0/3484/130154/paypal-fpti.js';
document.documentElement.firstChild.appendChild(fpti);
