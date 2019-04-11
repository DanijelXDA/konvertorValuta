function konvertor() {
    		var i1 = document.getElementById("izValute");
	    	var i2 = document.getElementById("uValutu");

	    	var izValIzbor = i1.options[i1.selectedIndex].value;
			var uValIzbor = i2.options[i2.selectedIndex].value;

			var iznos = document.getElementById("iznos").value;

			// eur -> ....
	    	if(izValIzbor == 1 && uValIzbor == 6)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 117.15 + " RSD";
			}
			else if(izValIzbor == 1 && uValIzbor == 7)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos + " EUR";
			}
			else if(izValIzbor == 1 && uValIzbor == 8)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 1.12583 + " USD";
			}
			else if(izValIzbor == 1 && uValIzbor == 9)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 1.12950088 + " CHF";
			}
			else if(izValIzbor == 1 && uValIzbor == 10)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.862229268 + " GBP";
			}
			// rsd -> ...
			else if(izValIzbor == 2 && uValIzbor == 6)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos + " RSD";
			}
			else if(izValIzbor == 2 && uValIzbor == 7)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.00847552472 + " EUR";
			}
			else if(izValIzbor == 2 && uValIzbor == 8)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.009542 + " USD";
			}
			else if(izValIzbor == 2 && uValIzbor == 9)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.00957311262 + " CHF";
			}
			else if(izValIzbor == 2 && uValIzbor == 10)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.00730836971 + " GBP";
			}
			// usd -> ....
			else if(izValIzbor == 3 && uValIzbor == 6)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 104.755919 + " RSD";
			}
			else if(izValIzbor == 3 && uValIzbor == 7)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.888060033 + " EUR";
			}
			else if(izValIzbor == 3 && uValIzbor == 8)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos + " USD";
			}
			else if(izValIzbor == 3 && uValIzbor == 9)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 1.00310964 + " CHF";
			}
			else if(izValIzbor == 3 && uValIzbor == 10)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.765872712 + " GBP";
			}
			// chf -> ...
			else if(izValIzbor == 4 && uValIzbor == 6)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 104.431175 + " RSD";
			}
			else if(izValIzbor == 4 && uValIzbor == 7)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.885464316 + " EUR";
			}
			else if(izValIzbor == 4 && uValIzbor == 8)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.9969 + " USD";
			}
			else if(izValIzbor == 4 && uValIzbor == 9)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos + " CHF";
			}
			else if(izValIzbor == 4 && uValIzbor == 10)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 0.763481124 + " GBP";
			}
			// gbp -> ...
			else if(izValIzbor == 5 && uValIzbor == 6)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 136.779803 + " RSD";
			}
			else if(izValIzbor == 5 && uValIzbor == 7)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 1.1597176 + " EUR";
			}
			else if(izValIzbor == 5 && uValIzbor == 8)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 1.3057 + " USD";
			}
			else if(izValIzbor == 5 && uValIzbor == 9)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos * 1.30976026 + " CHF";
			}
			else if(izValIzbor == 5 && uValIzbor == 10)
			{
				document.getElementById("konvertorFINAL").innerHTML = "Износ који добијате: &emsp;" + iznos + " GBP";
			}
			else
			{
				return null;
			}

		}