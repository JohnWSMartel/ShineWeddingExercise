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

//Function called everytime anything is clicked
function clicked(pic){
	//bool to see if image needs to be added or not
	var add = true;
	//if nothing has been clicked yet, start the array
	if(clickOrder.length == 0){
		clickOrder.push(pic);
	} else {
		//otherwise look through the whole array
		for(var i = 0; i < clickOrder.length; i++){
			//if the image has already been clicked
			if(pic == clickOrder[i]){
				//don't add it
				add = false;
			}
		}
		//if it needs to be added
		if(add){
			//add it
			clickOrder.push(pic);
		}
	}
	
	//bools to see who is accounted for
	var img0In = false;
	var img1In = false;
	var img2In = false;
	var img3In = false;
	var img4In = false;
	var img5In = false;
	var img6In = false;
	var img7In = false;
	var clicksRecipt;
	
	//Make sure number of clicks is up to date
	for(var i = 0; i < 8; i++){
		//check to see who is highest
		if(!img0In){ //if img0 has not been put in the list
            //see if img0 has been clicked more then any others not in the list
            if(img0Clicks<img1Clicks){
                
            } else if (img0Clicks<img2Clicks) {
                
            } else if (img0Clicks<img3Clicks) {
                
            } else if (img0Clicks<img4Clicks) {
                
            } else if (img0Clicks<img5Clicks) {
                
            } else if (img0Clicks<img6Clicks) {
                
            } else if (img0Clicks<img7Clicks) {
                
            } else {
                img0In = true;
                clicksRecipt += "Image 0: ";
                clickCounts.push(img0Clicks);
            }
		}
        if(!img1In){
            //see if img1 has been clicked more then any others not in the list
            if(img1Clicks<img0Clicks){
                
            } else if (img1Clicks<img2Clicks) {
                
            } else if (img1Clicks<img3Clicks) {
                
            } else if (img1Clicks<img4Clicks) {
                
            } else if (img1Clicks<img5Clicks) {
                
            } else if (img1Clicks<img6Clicks) {
                
            } else if (img1Clicks<img7Clicks) {
                
            } else {
                img1In = true;
                clicksRecipt += "Image 1: ";
                clickCounts.push(img1Clicks);
            }
        }
	}
	
	//Print out who has been clicked and how many times in descending order
	console.log(clicksRecipt);
};