var avgStats = [
	"allDamageDoneAvgPer10Min",
	"barrierDamageDoneAvgPer10Min",
	"deathsAvgPer10Min",
	"eliminationsAvgPer10Min",
	"finalBlowsAvgPer10Min",
	"healingDoneAvgPer10Min",
	"heroDamageDoneAvgPer10Min",
	"objectiveKillsAvgPer10Min",
	"objectiveTimeAvgPer10Min",
	"soloKillsAvgPer10Min" ]
	
var avgStatsTitles = [
	"Damage Done",
	"Barrier Damage Done",
	"Deaths",
	"Eliminations",
	"Final Blows",
	"Healing Done",
	"Hero Damage",
	"Objective Kills",
	"Objective Time",
	"Solo Kills" ]
	
var heroSelector = "<select id='hero' type='text' name='hero'>" +
	"<option value='ana'>Ana</option>" +
	"<option value='ashe'>Ashe</option>" +
	"<option value='baptiste'>Baptiste</option>" +
	"<option value='bastion'>Bastion</option>" +
	"<option value='brigitte'>Brigitte</option>" +
	"<option value='doomfist'>Doomfist</option>" +
	"<option value='dVa'>D.Va</option>" +
	"<option value='genji'>Genji</option>" +
	"<option value='hanzo'>Hanzo</option>" +
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