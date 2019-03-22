var img0;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img0Clicks = 0;
var img1Clicks = 0;
var img2Clicks = 0;
var img3Clicks = 0;
var img4Clicks = 0;
var img5Clicks = 0;
var img6Clicks = 0;
var img7Clicks = 0;
var clickOrder = [];

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
		clicked(img0);
	});
	img1.addEventListener('click', function (e) {
		img1Clicks++;
		clicked(img1);
	});
	img2.addEventListener('click', function (e) {
		img2Clicks++;
		clicked(img2);
	});
	img3.addEventListener('click', function (e) {
		img3Clicks++;
		clicked(img3);
	});
	img4.addEventListener('click', function (e) {
		img4Clicks++;
		clicked(img4);
	});
	img5.addEventListener('click', function (e) {
		img5Clicks++;
		clicked(img5);
	});
	img6.addEventListener('click', function (e) {
		img6Clicks++;
		clicked(img6);
	});
	img7.addEventListener('click', function (e) {
		img7Clicks++;
		clicked(img7);
	});
	
	console.log("img0 src "+img0.src);
	
	//make the values of the images variables in clickOrder
	if(window.localStorage.getItem('images') !== null){
		//console.log(JSON.parse(window.localStorage.getItem('images'))[0]); <-- This is returning the first thing clicked before reload
		console.log("First Item Retrived src: "+JSON.parse(window.localStorage.getItem('images'))[0].src);
		img0.src = JSON.parse(window.localStorage.getItem('images'))[0].src;
		
		for(var i = 0; i < JSON.parse(window.localStorage.getItem('images')).length;i++){
			console.log(JSON.parse(window.localStorage.getItem('images'))[i]);
		}
	}
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
	var clicksRecipt ="";
	
	//Make sure number of clicks is up to date
	for(var i = 0; i < 8; i++){
		//check to see who is highest
		if(!img0In){ //if img0 has not been put in the list
            //see if img0 has been clicked more then any others not in the list
            if(img0Clicks<img1Clicks&&!img1In){
                
            } else if (img0Clicks<img2Clicks&&!img2In) {
                
            } else if (img0Clicks<img3Clicks&&!img3In) {
                
            } else if (img0Clicks<img4Clicks&&!img4In) {
                
            } else if (img0Clicks<img5Clicks&&!img5In) {
                
            } else if (img0Clicks<img6Clicks&&!img6In) {
                
            } else if (img0Clicks<img7Clicks&&!img7In) {
                
            } else {
                img0In = true;
                clicksRecipt += "Image 0: " + img0Clicks + "; ";
            }
		}
        if(!img1In){
            //see if img1 has been clicked more then any others not in the list
            if(img1Clicks<img0Clicks&&!img0In){
                
            } else if (img1Clicks<img2Clicks&&!img2In) {
                
            } else if (img1Clicks<img3Clicks&&!img3In) {
                
            } else if (img1Clicks<img4Clicks&&!img4In) {
                
            } else if (img1Clicks<img5Clicks&&!img5In) {
                
            } else if (img1Clicks<img6Clicks&&img6In) {
                
            } else if (img1Clicks<img7Clicks&&img7In) {
                
            } else {
                img1In = true;
                clicksRecipt += "Image 1: " + img1Clicks + "; ";
            }
        }
        if(!img2In){
            //see if img2 has been clicked more then any others not in the list
            if(img2Clicks<img0Clicks&&!img0In){
                
            } else if (img2Clicks<img1Clicks&&!img1In) {
                
            } else if (img2Clicks<img3Clicks&&!img3In) {
                
            } else if (img2Clicks<img4Clicks&&!img4In) {
                
            } else if (img2Clicks<img5Clicks&&!img5In) {
                
            } else if (img2Clicks<img6Clicks&&img6In) {
                
            } else if (img2Clicks<img7Clicks&&img7In) {
                
            } else {
                img2In = true;
                clicksRecipt += "Image 2: " + img2Clicks + "; ";
            }
        }
        if(!img3In){
            //see if img3 has been clicked more then any others not in the list
            if(img3Clicks<img0Clicks&&!img0In){
                
            } else if (img3Clicks<img1Clicks&&!img1In) {
                
            } else if (img3Clicks<img2Clicks&&!img2In) {
                
            } else if (img3Clicks<img4Clicks&&!img4In) {
                
            } else if (img3Clicks<img5Clicks&&!img5In) {
                
            } else if (img3Clicks<img6Clicks&&img6In) {
                
            } else if (img3Clicks<img7Clicks&&img7In) {
                
            } else {
                img3In = true;
                clicksRecipt += "Image 3: " + img3Clicks + "; ";
            }
        }
        if(!img4In){
            //see if img4 has been clicked more then any others not in the list
            if(img4Clicks<img0Clicks&&!img0In){
                
            } else if (img4Clicks<img1Clicks&&!img1In) {
                
            } else if (img4Clicks<img2Clicks&&!img2In) {
                
            } else if (img4Clicks<img3Clicks&&!img3In) {
                
            } else if (img4Clicks<img5Clicks&&!img5In) {
                
            } else if (img4Clicks<img6Clicks&&img6In) {
                
            } else if (img4Clicks<img7Clicks&&img7In) {
                
            } else {
                img4In = true;
                clicksRecipt += "Image 4: " + img4Clicks + "; ";
            }
        }
        if(!img5In){
            //see if img5 has been clicked more then any others not in the list
            if(img5Clicks<img0Clicks&&!img0In){
                
            } else if (img5Clicks<img1Clicks&&!img1In) {
                
            } else if (img5Clicks<img2Clicks&&!img2In) {
                
            } else if (img5Clicks<img3Clicks&&!img3In) {
                
            } else if (img5Clicks<img4Clicks&&!img4In) {
                
            } else if (img5Clicks<img6Clicks&&img6In) {
                
            } else if (img5Clicks<img7Clicks&&img7In) {
                
            } else {
                img5In = true;
                clicksRecipt += "Image 5: " + img5Clicks + "; ";
            }
        }
        if(!img6In){
            //see if img6 has been clicked more then any others not in the list
            if(img6Clicks<img0Clicks&&!img0In){
                
            } else if (img6Clicks<img1Clicks&&!img1In) {
                
            } else if (img6Clicks<img2Clicks&&!img2In) {
                
            } else if (img6Clicks<img3Clicks&&!img3In) {
                
            } else if (img6Clicks<img4Clicks&&!img4In) {
                
            } else if (img6Clicks<img5Clicks&&img5In) {
                
            } else if (img6Clicks<img7Clicks&&img7In) {
                
            } else {
                img6In = true;
                clicksRecipt += "Image 6: " + img6Clicks + "; ";
            }
        }
        if(!img7In){
            //see if img7 has been clicked more then any others not in the list
            if(img7Clicks<img0Clicks&&!img0In){
                
            } else if (img7Clicks<img1Clicks&&!img1In) {
                
            } else if (img7Clicks<img2Clicks&&!img2In) {
                
            } else if (img7Clicks<img3Clicks&&!img3In) {
                
            } else if (img7Clicks<img4Clicks&&!img4In) {
                
            } else if (img7Clicks<img5Clicks&&img5In) {
                
            } else if (img7Clicks<img6Clicks&&img6In) {
                
            } else {
                img7In = true;
                clicksRecipt += "Image 7: " + img7Clicks + "; ";
            }
        }
	}
	
	//Save to local storage
	window.localStorage.setItem('images',JSON.stringify(clickOrder));
	//Print out who has been clicked and how many times in descending order
	console.log("Number of clicks: " + clicksRecipt);
};