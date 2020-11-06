document.addEventListener("DOMContentLoaded", init);

function redirect(){
	setCookie("verified", true, 10000);
	window.location.replace(location.search.substring(1));
}

function setCookie(cname, cval, exdays){
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cval + ";" + expires + ";path=/";
}