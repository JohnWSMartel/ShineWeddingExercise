var img0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img0Clicks;
var img1Clicks;
var img2Clicks;
var img3Clicks;
var img4Clicks;
var img5Clicks;
var img6Clicks;
var img7Clicks;
var clickOrder = [];
var clickCounts = [];

window.onload = function(){
	//assign images to variables for ease of reading
	img0 = document.getElementById('img0');
	img1 = document.getElementById('img1');
	img2 = document.getElementById('img2');
	img3 = document.getElementById('img3');
	img4 = document.getElementById('img4');
	img5 = document.getElementById('img5');
	img6 = document.getElementById('img6');
	img7 = document.getElementById('img7');
	
	//making the images clickable
	img0.addEventListener('click', function (e) {
		img0Clicks++;
		clicked('img0');
	});
	img1.addEventListener('click', function (e) {
		img1Clicks++;
		clicked('img1');
	});
	img2.addEventListener('click', function (e) {
		img2Clicks++;
		clicked('img2');
	});
	img3.addEventListener('click', function (e) {
		img3Clicks++;
		clicked('img3');
	});
	img4.addEventListener('click', function (e) {
		img4Clicks++;
		clicked('img4');
	});
	img5.addEventListener('click', function (e) {
		img5Clicks++;
		clicked('img5');
	});
	img6.addEventListener('click', function (e) {
		img6Clicks++;
		clicked('img6');
	});
	img7.addEventListener('click', function (e) {
		img7Clicks++;
		clicked('img7');
	});
};

//Function called by all buttons
function clicked(pic){
	var add = true;
	if(clickOrder.length == 0){
		clickOrder.push(pic);
	} else {
		for(var i = 0; i < clickOrder.length; i++){
			if(pic == clickOrder[i]){
				add = false;
			}
		}
		if(add){
			clickOrder.push(pic);
			console.log(pic + " added to clickOrder!");
		}
	}
	console.log("clicked done");
	console.log(clickOrder);
};
