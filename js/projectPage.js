function run()
{
clock()
updateImage()
}

function clock()
{
	window.updatePage = function () {
		
	
		var now = new Date();
		var hour = now.getHours();
		
		
		var minute = now.getMinutes();
		var second = now.getSeconds();
		var year = now.getFullYear();
		var month = now.getMonth();
		var day = now.getDate();
		var dayOfWeek = now.getDay();
		var ampm ="AM";
		ampm = (hour < 12) ? "AM" : "PM";
		hour = (hour <= 12) ? hour : hour - 12;
		hour = (hour == 0) ? 12 : hour;
		minute = (minute < 10) ? "0" + minute : minute;
		second = (second < 10) ? "0" + second : second;
		timeDisplay = "" + hour + ":" + minute + ":" + second + " " + ampm;

		document.getElementById('currentTime').innerText = timeDisplay;
	}
	
		var greeting;
		var timeDisplay;

		updatePage();
		setInterval('updatePage()',1000);
		
}

	
		var images = ["A.jpg", "B.jpg", "C.jpg", "E.jpg", "F.jpg", "G.jpg"];
		var imgCounter = 1;
			
		function updateImage()
		{
			imgCounter = Math.floor(Math.random()*images.length);
			document.getElementById("imgDisplay").src= "img\\" + images[imgCounter];
		}

		setInterval('updateImage()', 1000)

window.onload = run;