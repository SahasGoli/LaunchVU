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

	hours = (hours < 10) ? "0" + hours : hours;
	hours = (hours > 12) ? (hours - 12) : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;
	
	var currTime = hours + ":" + minutes + ":" + seconds;
	
	document.getElementById("DisplayGreeting").innerText = response;
	document.getElementById("DisplayTime").innerText = currTime;
    	document.getElementById("DisplayTime").textContent = currTime;
	
	setTimeout(displayTime, 1000);
}



displayTime();
displayGreeting();