//var ad_url = 'adfarm.mediaplex.com/ad/ck/15978-198668-1039-4?mpt=1736108736&mpcr=&mpcrset=&mpcr=46583331&mpcrset=root';
//var ad_url = '<mpck/>';
alert("one");
var x = document.referrer;
alert(x);
var pat = /\d+\-\d+\-\d+\-\d+/; //define pattern to match placement id 
var rot_id = x.match(pat); //extract placement id from mpck
alert(rot_id);
alert(theMpck);
var ad_url = 'adfarm.mediaplex.com/ad/ck/'+rot_id;
var tdate = new Date();
var tepochtime = Math.round(tdate.getTime()/1000.0);
var toffset = tdate.getTimezoneOffset();
var fpti = document.createElement("script");
var proto = window.location.protocol;
var src_url = ((proto.match('https:')) ? '//secure.img-cdn.mediaplex.com' : '//img-cdn.mediaplex.com');
fpti.src = proto + src_url + '/0/3484/130154/paypal-fpti.js';
document.documentElement.firstChild.appendChild(fpti);
