/* Author:
Sam Vedamanikam with help from Michael Mullins....or the other way around, idk.
*/




function run()
{
	// wrap the executed show function in an anonymous function so that it doesn't execute immediately
	BoxShow("resumeObjectives","displayObjective");
	BoxShow("resumeSkills","displaySkills");
	BoxShow("resumeExperience","displayExperience");
	BoxShow("resumeEducation","displayEducation");
	BoxShow("resumeExtraC","displayExtraC");
	
	clock()
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
		window.setInterval('updatePage()',1000);

}



function BoxSlide(hoverBox, displayBox) {
	// Pulls in the elements to be used
	var hover = document.getElementById(hoverBox);
	var display = document.getElementById(displayBox);
	
	// Sets Hover Events
	hover.onmouseover = function() {showDisplay(display)};
	
	function hideDisplay(elem)
	{
		$(elem).animate({
			opacity: 0,
			width: "0"
		});
		hover.onmouseout = null;
		hover.onmouseover = function() {showDisplay(display)};
	}

	function showDisplay(elem)
	{	
		$(elem).animate({
			opacity: 1,
			width: "355px"
		});
		hover.onmouseover = null;
		hover.onmouseout = function() {hideDisplay(display)};
	}
}

function BoxShow(hoverBox, displayBox) {
	// Pulls in the elements to be used
	var hover = document.getElementById(hoverBox);
	var display = document.getElementById(displayBox);
	
	// Sets Hover Events
	hover.onmouseover = function() {showDisplay(display)};
	hover.onmouseout = function() {hideDisplay(display)};
	
	function hideDisplay(elem)
	{
		$(elem).hide()
	}

	function showDisplay(elem)
	{	
		$(elem).show()
	}
}

window.onload = run;

