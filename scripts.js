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
		heroInput.innerHTML = "<select id='hero' type='text' name='hero'>" +
				"<option value='ana'>Ana</option>" +
				"<option value='ashe'>Ashe</option>" +
				"<option value='baptiste'>Baptiste</option>" +
				"<option value='bastion'>Bastion</option>" +
				"<option value='brigitte'>Brigitte</option>" +
				"<option value='doomfist'>Doomfist</option>" +
				"<option value='dVa'>D.Va</option>" +
				"<option value='genji'>Genji</option>" +
				"<option value='hanzo'>Ganzo</option>" +
				"<option value='junkrat'>Junkrat</option>" +
				"<option value='lucio'>Lucio</option>" +
				"<option value='mccree'>Mccree</option>" +
				"<option value='mei'>Mei</option>" +
				"<option value='mercy'>Mercy</option>" +
				"<option value='moira'>Moira</option>" +
				"<option value='orisa'>Orisa</option>" +
				"<option value='pharah'>Pharah</option>" +
				"<option value='reaper'>Reaper</option>" +
				"<option value='reinhardt'>Reinhardt</option>" +
				"<option value='roadhog'>Roadhog</option>" +
				"<option value='sigma'>Sigma</option>" +
				"<option value='soldier76'>Soldier76</option>" +
				"<option value='sombra'>Sombra</option>" +
				"<option value='symmetra'>Symmetra</option>" +
				"<option value='torbjorn'>Torbjorn</option>" +
				"<option value='tracer'>Tracer</option>" +
				"<option value='widowmaker'>Widowmaker</option>" +
				"<option value='winston'>Winston</option>" +
				"<option value='wreckingBall'>WreckingBall</option>" +
				"<option value='zarya'>Zarya</option>" +
				"<option value='zenyatta'>Zenyatta</option>" +
			"</select> <button id='heroSubmit' type='button' onClick='searchHero()'>Search Hero Stats</button>"
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
	jsonDiv.innerHTML += "| - " + avgStatsTitles[index] + " : " + json["competitiveStats"]["careerStats"][currHero]["average"][item] + "<br>"
}


document.body.onload = onload()