document.body.style.backgroundColor = "black";  //displays black bg before image loads
bgImage();
displayTime();
function bgImage() {
	let requestUrl = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=da28d71287405150fe3d80eb7e086599&photoset_id=72157623555141080&user_id=48007774%40N03&per_page=500&format=json&nojsoncallback=1%22";
	var resultPhotos=[];
	var finalLink;
	$.getJSON(requestUrl, function(data) {
		$.each(data.photoset.photo, function (i, item) {
			src = "http://farm" + item.farm + ".static.flickr.com/" + item.server + "/" + item.id + "_" + item.secret + "_c.jpg";
			resultPhotos.push(src);
		});
		let randomNum = Math.floor(Math.random() * (resultPhotos.length));
		finalLink = resultPhotos[randomNum];
		console.log(finalLink);
		displayBG(finalLink);
	});
}

function displayBG(finalLink) {
	console.log(finalLink);
	document.body.style.backgroundImage = "url(" + finalLink + ")";  //displays bg image
}

function displayTime(){
	var today = new Date();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();

	var response;
	var name = 'Sahas';

	if(hours < 12)
		response = 'Good morning, ' + name + '.';
   	else if (hours >= 12 && hours <= 17)
        response = 'Good afternoon, ' + name + '.';
    else if (hours >= 17 && hours <= 24)
        response = 'Good evening, ' + name + '.';

    if(hours == 0) {
    	hours = 12;
	}
    else if(hours < 10) {
		hours = (hours < 10) ? "0" + hours : hours;
	}
    else {
		hours = (hours > 12) ? (hours - 12) : hours;
	}
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	var currTime = hours + ":" + minutes + ":" + seconds;

	document.getElementById("DisplayGreeting").innerText = response;
	document.getElementById("DisplayTime").innerText = currTime;
	document.getElementById("DisplayTime").textContent = currTime;

	setTimeout(displayTime, 1000);
}





