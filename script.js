// if you want to change something on a DIFFERENT element, you have to call it by name (it's "id")
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp

var img = "0"
var rain = "0"
var back = "0"
var brk = "0"
	
// "el" stands for the "element" that was just clicked

// "el" stands for the "element" that was just clicked
function removeColor(el){
	if(rain == "0") {
	document.getElementById("rainbow8s").classList.remove("rainbow8s");
	document.getElementById("rainbow8s").classList.add("bandw2s");
	document.getElementById("rainbow10s").classList.remove("rainbow10s");
	document.getElementById("rainbow10s").classList.add("bandw5s");
	document.getElementById("rainbow12s").classList.remove("rainbow12s");
	document.getElementById("rainbow12s").classList.add("bandw7s");
	rain = "1";
	}
	else{
	document.getElementById("rainbow8s").classList.add("rainbow8s");
	document.getElementById("rainbow8s").classList.remove("bandw2s");
	document.getElementById("rainbow10s").classList.add("rainbow10s");
	document.getElementById("rainbow10s").classList.remove("bandw5s");
	document.getElementById("rainbow12s").classList.add("rainbow12s");
	document.getElementById("rainbow12s").classList.remove("bandw7s");
	rain = "0";
	}
}

function changeImg(el){
	if(img == "0") {
	document.getElementById("rainbow").src="image/donut.gif";
	document.getElementById("blank").src="image/spherical.gif";
	document.getElementById("hands").src="image/paper-ball.gif";
	img = "1";
	}
	else if(img == "1"){
	document.getElementById("rainbow").src="image/sun.gif";
	document.getElementById("blank").src="image/spires.gif";
	document.getElementById("hands").src="image/spiral.gif";
	img = "2";
	}
	else{
	document.getElementById("rainbow").src="image/rainbow.gif";
	document.getElementById("blank").src="";
	document.getElementById("hands").src="image/hands.gif";
	img = "0";
	}
}

function remaddBack(el) {
	if(back == "0") {
		document.getElementById("rainbow8s").classList.remove("rainbow8s");
		document.getElementById("rainbow8s").classList.remove("bandw2s");
		document.getElementById("rainbow10s").classList.remove("rainbow10s");
		document.getElementById("rainbow10s").classList.remove("bandw5s");
		document.getElementById("rainbow12s").classList.remove("rainbow12s");
		document.getElementById("rainbow12s").classList.remove("bandw7s");
		document.body.style.backgroundImage = "url('image/repeat.gif')";
		document.getElementById("rainbow").src="";
		document.getElementById("blank").src="";
		document.getElementById("hands").src="";
		back = "1";
	}
	else if(back == "1") {
		document.body.style.backgroundImage = "url('image/square.gif')";
		back = "2";
	}
	else {
		document.getElementById("rainbow8s").classList.add("rainbow8s");
		document.getElementById("rainbow10s").classList.add("rainbow10s");
		document.getElementById("rainbow12s").classList.add("rainbow12s");
		document.getElementById("rainbow").src="image/rainbow.gif";
		document.getElementById("blank").src="";
		document.getElementById("hands").src="image/hands.gif";
		document.body.style.backgroundImage = "url('image/trippy.gif')";
		back = "0";
	}
}

function Broken(el) {
	document.getElementById("rainbow8s").classList.remove("rainbow8s");
	document.getElementById("rainbow8s").classList.remove("bandw2s");
	document.getElementById("rainbow10s").classList.remove("rainbow10s");
	document.getElementById("rainbow10s").classList.remove("bandw5s");
	document.getElementById("rainbow12s").classList.remove("rainbow12s");
	document.getElementById("rainbow12s").classList.remove("bandw7s");
	document.getElementById("rainbow").src="";
	document.getElementById("blank").src="";
	document.getElementById("hands").src="";
	document.body.style.backgroundImage = "url('image/trippy.gif')";
	sleep(5000);
	document.getElementById("rainbow8s").classList.add("rainbow8s");
	document.getElementById("rainbow10s").classList.add("rainbow10s");
	document.getElementById("rainbow12s").classList.add("rainbow12s");
	document.getElementById("rainbow").src="image/rainbow.gif";
	document.getElementById("blank").src="";
	document.getElementById("hands").src="image/hands.gif";
	document.body.style.backgroundImage = "url('image/trippy.gif')";
}
	
		
		