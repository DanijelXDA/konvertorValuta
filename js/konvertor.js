function konvertor() {
    		var i1 = document.getElementById("izValute");
	    	var i2 = document.getElementById("uValutu");

	    	var izValIzbor = i1.options[i1.selectedIndex].value;
			var uValIzbor = i2.options[i2.selectedIndex].value;

			var iznos = document.getElementById("iznos").value;

			// eur -> ....
	    	if(izValIzbor == 1 && uValIzbor == 6)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos * 117.15 + " RSD";
			}
			else if(izValIzbor == 1 && uValIzbor == 7)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos + " EUR";
			}
			else if(izValIzbor == 1 && uValIzbor == 8)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos * 1.12583 + " USD";
			}
			else if(izValIzbor == 1 && uValIzbor == 9)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos * 1.12950088 + " CHF";
			}
			else if(izValIzbor == 1 && uValIzbor == 10)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos * 0.862229268 + " GBP";
			}
			// rsd -> ...
			else if(izValIzbor == 2 && uValIzbor == 6)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos + " RSD";
			}
			else if(izValIzbor == 2 && uValIzbor == 7)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos * 0.00847552472 + " EUR";
			}
			else if(izValIzbor == 2 && uValIzbor == 8)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos * 0.009542 + " USD";
			}
			else if(izValIzbor == 2 && uValIzbor == 9)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos * 0.00957311262 + " CHF";
			}
			else if(izValIzbor == 2 && uValIzbor == 10)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Iznos koji dobijate: &emsp;" + iznos * 0.00730836971 + " GBP";
			}
			// usd -> ....
		}