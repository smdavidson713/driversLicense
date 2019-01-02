function age(){
			var x = document.getElementById("birth-year").value;
			var y = 2018 - x;
			if(y >= 18){
				document.write("You are eligiable for your Driver's License!");
			}
			else{
				document.write("Sorry, you are not able to get your Driver's License.");
			}



		}