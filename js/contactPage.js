/* Author:
Sam Vedamanikam 
*/


function run()
{
clock()
}

function validateBlankString()
{
checkStringMail()
checkStringCom()
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




		function checkStringMail()
		{
		var check=document.forms["sweetFormYo"]["mail"].value;
		if (check==null || check=="")
			{
			alert("You must enter an email address.");
			return false;
			}
		}
		
		function checkStringCom()
		{
		var check=document.forms["sweetFormYo"]["commmmment"].value;
		if (check==null || check=="")
			{
			alert("Please enter a comment.");
			return false;
			}
		}

         function formReset() {
            window.event.returnValue = false;
   
            if ( confirm( "Are you sure you want to reset?" ) )
               window.event.returnValue = true;
         }

window.onload = run;

