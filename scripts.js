var currHero
var json
var xmlHttp = new XMLHttpRequest();

function onload(){
	console.log("test")
	xmlHttp.open("GET", "https://ow-api.com/v1/stats/pc/na/GreenSahib-1337/complete", false)
	xmlHttp.send();
	json = JSON.parse(xmlHttp.responseText)
}

function searchHero(){
	try {
		jsonDiv.innerHTML = ""
		currHero = document.getElementById("hero").value;
		console.log(currHero)
		getHeroData(currHero)
	}
	catch(error){
		jsonDiv.innerHTML = "Hero not played in current competitive season"
		console.log(error)
	}
}

function setPlayer(){
	jsonDiv.innerHTML = ""
	var bTag = document.getElementById("bTag").value;
	bTag = bTag.replace(/#/, "-")
	console.log(bTag)
	var url = "https://ow-api.com/v1/stats/pc/na/" + bTag + "/complete"
	xmlHttp.open("GET", url, false)
	xmlHttp.send()
	json = JSON.parse(xmlHttp.responseText)
	if(json.error == "bad tag"){
		jsonDiv.innerHTML = "No character exists under BattleTag \""  + bTag + "\""
		return
	}
	if (json["private"]){
		jsonDiv.innerHTML = "Profile is private"
	}
	else{
		heroInput.innerHTML = heroSelector
	}
}

function getHeroData(hero){
	currHero = hero
	console.log(hero)
	var heroData =json["competitiveStats"]["careerStats"][hero]
	var gamesWon = json["competitiveStats"]["careerStats"][hero]["game"]["gamesWon"]
	var gamesLost = json["competitiveStats"]["careerStats"][hero]["game"]["gamesLost"]
	console.log(gamesWon + ":" + gamesLost)
	var winPercent = (gamesWon / (gamesLost + gamesWon) * 100).toFixed(2) + "% (" + gamesWon + ":" + gamesLost + ")"
	jsonDiv.innerHTML += currHero + "<br>"
	console.log(winPercent)
	if (gamesWon == 0 && gamesLost == 0){
		winPercent = "No games finished"
	}
	jsonDiv.innerHTML += "| Win Rate : " + winPercent
	jsonDiv.innerHTML += "<br>| Average for 10 Minutes <br>"
	avgStats.forEach(getAverages)
}

function getAverages(item, index){
	var value
	if(typeof json["competitiveStats"]["careerStats"][currHero]["average"][item] == "undefined"){
		value = "No Data";
	}
	else {
		value = json["competitiveStats"]["careerStats"][currHero]["average"][item];
	}
	jsonDiv.innerHTML += "| - " + avgStatsTitles[index] + " : " + value + "<br>"
}


document.body.onload = onload()