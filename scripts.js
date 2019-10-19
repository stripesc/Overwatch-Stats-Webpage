var currHero
var json
var avgStats = ["allDamageDoneAvgPer10Min", "barrierDamageDoneAvgPer10Min", "deathsAvgPer10Min",
	"eliminationsAvgPer10Min", "finalBlowsAvgPer10Min", "healingDoneAvgPer10Min", "heroDamageDoneAvgPer10Min",
	"objectiveKillsAvgPer10Min", "objectiveTimeAvgPer10Min", "soloKillsAvgPer10Min" ]
var avgStatsTitles = ["Damage Done", "Barrier Damage Done", "Deaths", "Eliminations", "Final Blows",
"Healing Done", "Hero Damage", "Objective Kills", "Objective Time", "Solo Kills" ]
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
		getHeroData(document.getElementById("hero").value)
	}
	catch(error){
		jsonDiv.innerHTML = "invalid hero"
	}
}

function setPlayer(){
	var bTag = document.getElementById("bTag").value;
	bTag = bTag.replace(/#/, "-")
	console.log(bTag)
	var url = "https://ow-api.com/v1/stats/pc/na/" + bTag + "/complete"
	xmlHttp.open("GET", url, false)
	xmlHttp.send()
	json = JSON.parse(xmlHttp.responseText)
}

function getHeroData(hero){
	currHero = hero
	console.log(json)
	console.log(hero)
	var heroData =json["competitiveStats"]["careerStats"][hero]
	console.log(heroData)
	jsonDiv.innerHTML += currHero + "<br>| Average for 10 Minutes <br>"
	avgStats.forEach(getAverages)
}

function getAverages(item, index){
	jsonDiv.innerHTML += "| - " + avgStatsTitles[index] + " : " + json["competitiveStats"]["careerStats"][currHero]["average"][item] + "<br>"
}


document.body.onload = onload()