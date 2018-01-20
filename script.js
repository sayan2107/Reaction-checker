var t0=0, t1=0;

	//generates random color
		 	function getRandomColor() {
		  var letters = '0123456789ABCDEF';
		  var color = '#';
		  for (var i = 0; i < 6; i++) {
		    color += letters[Math.floor(Math.random() * 16)];
		  }
		  return color;
		}



   //making div with id 'main' appear on the screen
		window.setTimeout(function appear(){
			var width=(Math.random()*200)+50;
			var radius=(Math.random()*50);
 		    document.getElementById("main").style.backgroundColor = getRandomColor();
 		    document.getElementById("main").style.height=width+"px";
 		    document.getElementById("main").style.width=width+"px";
 		    document.getElementById("main").style.borderRadius=radius+"%";
 		    document.getElementById("main").style.top= Math.random()*300+"px";
 		    document.getElementById("main").style.left= Math.random()*1100+"px";
            document.getElementById("main").style.display="block";
            t0=performance.now();
 	}, Math.random()*2000)


 //shows timing of the click
 	function timing(){
 		t1 = performance.now();
 		//document.getElementById("main").style.display="none";
 		var time_taken=((t1-t0)/1000).toFixed(3);
 		document.getElementById("timing").innerHTML = time_taken;
 		
 		setTimeout(function(){
			   window.location.reload(1);
			}, 1000);

 	}