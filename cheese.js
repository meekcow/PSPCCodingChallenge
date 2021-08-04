'use strict'

/* let requestURL = 'https://od-do.agr.gc.ca/canadianCheeseDirectory.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  const cheeseData = request.response;
} */

// To store the cheese data json
var cheeseData;

// To iterate through each cheese and keep track
var cheeseIndex;
var cheeseDataSize;

// Variable to determine whether to load french/english text 
var en_fr = "en";

/*
* Ran into a lot of issues with trying to fetch the API response (CORs issues)
* Also ran into a lot of issues trying to read the file locally
* Therefore decided to have the user load the json file. However fetch code is still included
*/
document.getElementById('inputfile')
	.addEventListener('change', function() {
		var fr=new FileReader();
		fr.onload=function(){
			// parse result into cheeseData as a JSON obj
			cheeseData = JSON.parse(fr.result);
			
			// store # of cheeses
			cheeseDataSize = cheeseData.CheeseDirectory.length;
			
			// load the first cheese and keep a tracker to know where you are
			cheeseIndex = 0;
			loadCheeseDataEN(cheeseData.CheeseDirectory[cheeseIndex]);
			console.log(cheeseIndex);
			console.log(cheeseDataSize);
		}
        fr.readAsText(this.files[0]);
});

// Function to populate details of the cheese into each respective field if the data obj exists
function loadCheeseDataEN(cheeseDataObj) {
	if (cheeseDataObj) {
		document.getElementById("cheeseName").innerHTML = "Cheese Name: " + cheeseDataObj.CheeseNameEn;
		document.getElementById("cheeseId").innerHTML = "Cheese ID: " + cheeseDataObj.CheeseId;
		document.getElementById("lastUpdateDate").innerHTML = "Last Updated: " + cheeseDataObj.LastUpdateDate;
		document.getElementById("fatContentPercent").innerHTML = "Fat Content: " + cheeseDataObj.FatContentPercent;
		document.getElementById("moisturePercent").innerHTML = "Moisture Content: " + cheeseDataObj.MoisturePercent;
		document.getElementById("particularities").innerHTML = "Particularities: " + cheeseDataObj.ParticularitiesEn;
		document.getElementById("flavour").innerHTML = "Flavour: " + cheeseDataObj.FlavourEn;
		document.getElementById("characteristics").innerHTML = "Characteristics: " + cheeseDataObj.CharacteristicsEn;
		document.getElementById("ripening").innerHTML = "Ripening: " + cheeseDataObj.RipeningEn;
		document.getElementById("organic").innerHTML = "Organic: " + cheeseDataObj.Organic;
		document.getElementById("categoryType").innerHTML = "Category: " + cheeseDataObj.CategoryTypeEn;
		document.getElementById("milkType").innerHTML = "Milk Type: " + cheeseDataObj.MilkTypeEn;
		document.getElementById("milkTreatmentType").innerHTML = "Milk Treatment Type: " + cheeseDataObj.MilkTreatmentTypeEn;
		document.getElementById("rindType").innerHTML = "Rind Type: " + cheeseDataObj.RindTypeEn;
		document.getElementById("manufacturerName").innerHTML = "Manufacturer Name: " + cheeseDataObj.ManufacturerNameEn;
		document.getElementById("manufacturerProvCode").innerHTML = "Manufacturer Province: " + cheeseDataObj.ManufacturerProvCode;
		document.getElementById("manufacturingType").innerHTML = "Manufacturing Type: " + cheeseDataObj.ManufacturingTypeEn;
		document.getElementById("website").innerHTML = "Manufacturer Website: <a href='" + cheeseDataObj.WebSiteEn + "'>" + cheeseDataObj.WebSiteEn + "</a>";
	}
}

// TODO: Change hardcoded names to FR or move everything to a constants file
function loadCheeseDataFR(cheeseDataObj) {
	if (cheeseDataObj) {
		document.getElementById("cheeseName").innerHTML = "Cheese Name: " + cheeseDataObj.CheeseNameFr;
		document.getElementById("cheeseId").innerHTML = "Cheese ID: " + cheeseDataObj.CheeseId;
		document.getElementById("lastUpdateDate").innerHTML = "Last Updated: " + cheeseDataObj.LastUpdateDate;
		document.getElementById("fatContentPercent").innerHTML = "Fat Content: " + cheeseDataObj.FatContentPercent;
		document.getElementById("moisturePercent").innerHTML = "Moisture Content: " + cheeseDataObj.MoisturePercent;
		document.getElementById("particularities").innerHTML = "Particularities: " + cheeseDataObj.ParticularitiesFr;
		document.getElementById("flavour").innerHTML = "Flavour: " + cheeseDataObj.FlavourFr;
		document.getElementById("characteristics").innerHTML = "Characteristics: " + cheeseDataObj.CharacteristicsFr;
		document.getElementById("ripening").innerHTML = "Ripening: " + cheeseDataObj.RipeningFr;
		document.getElementById("organic").innerHTML = "Organic: " + cheeseDataObj.Organic;
		document.getElementById("categoryType").innerHTML = "Category: " + cheeseDataObj.CategoryTypeFr;
		document.getElementById("milkType").innerHTML = "Milk Type: " + cheeseDataObj.MilkTypeFr;
		document.getElementById("milkTreatmentType").innerHTML = "Milk Treatment Type: " + cheeseDataObj.MilkTreatmentTypeFr;
		document.getElementById("rindType").innerHTML = "Rind Type: " + cheeseDataObj.RindTypeFr;
		document.getElementById("manufacturerName").innerHTML = "Manufacturer Name: " + cheeseDataObj.ManufacturerNameFr;
		document.getElementById("manufacturerProvCode").innerHTML = "Manufacturer Province: " + cheeseDataObj.ManufacturerProvCode;
		document.getElementById("manufacturingType").innerHTML = "Manufacturing Type: " + cheeseDataObj.ManufacturingTypeFr;
		document.getElementById("website").innerHTML = "Manufacturer Website: <a href='" + cheeseDataObj.WebSiteFr + "'>" + cheeseDataObj.WebSiteFr + "</a>";
	}
}

// prev/next button would cycle through loading cheese data
function next() {
	console.log("NEXT CHEESE");
	if (cheeseIndex + 1 < cheeseDataSize) {
		cheeseIndex += 1;
	}else {
		cheeseIndex = 0;
	}
	console.log(cheeseIndex);
	if (en_fr === "en") {
		loadCheeseDataEN(cheeseData.CheeseDirectory[cheeseIndex]);
	}else {
		loadCheeseDataFR(cheeseData.CheeseDirectory[cheeseIndex]);
	}
}

function prev() {
	console.log("PREVIOUS CHEESE");
	if (cheeseIndex - 1 >= 0) {
		cheeseIndex -= 1;
	}else {
		cheeseIndex = cheeseDataSize - 1;
	}
	console.log(cheeseIndex);
	if (en_fr === "en") {
		loadCheeseDataEN(cheeseData.CheeseDirectory[cheeseIndex]);
	}else {
		loadCheeseDataFR(cheeseData.CheeseDirectory[cheeseIndex]);
	}
}

// en/fr button will switch current language to load
function switchEN() {
	console.log("ENGLISH");
	en_fr = "en";
	loadCheeseDataEN(cheeseData.CheeseDirectory[cheeseIndex]);
}

function switchFR() {
	console.log("FRANCAIS");
	en_fr = "fr";
	loadCheeseDataFR(cheeseData.CheeseDirectory[cheeseIndex]);
}