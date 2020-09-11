function game() {
	if(gameactive === 0) {
		start();
	} else if(gameactive === 1 && userchoice >= 1) {
		end();
	} else if(gameactive === 1 && userchoice === 0) {
		end2();
	} else {
		start2();
	}
}

function start() {
	var btn = document.getElementById('btnt');
	gameactive = 1;
	btn.innerHTML = 'End Game';
	document.getElementById('qs1').style.display = 'block';
	document.getElementById('qs2').style.display = 'block';
	document.getElementById('intscore').style.display = 'block';
}

function end() {
	var confirmend = confirm("Are you sure to end the game?");
	var btn = document.getElementById('btnt');
	if(confirmend === true && userchoice >= 1) {
		gameactive = 2;
		ucs = 0;
		score = 0;
		scoredis();
		cscore = 0;
		cscoredis();
		document.getElementById('btn1').style.width = '170px';
		btn.innerHTML = 'Start Game again';
		document.getElementById('qs1').style.display = 'none';
		document.getElementById('qs2').style.display = 'none';
		document.getElementById('intscore').style.display = 'none';
		document.getElementById('scoredis').style.display = 'none';
		document.getElementById('cscoredis').style.display = 'none';
		document.getElementById('inttxt').style.display = 'block';
		document.getElementById('pic').style.display = 'none'; 
	}
}

function end2() {
	var confirmend2 = confirm("You haven't started yet, sure to end?");
	var btn = document.getElementById('btnt');
	if(confirmend2 === true) {
		gameactive = 0;
		btn.innerHTML = 'Start Game';
		document.getElementById('qs1').style.display = 'none';
		document.getElementById('qs2').style.display = 'none';
		document.getElementById('cscoredis').style.display = 'none';
		document.getElementById('intscore').style.display = 'none';
	}
}

function start2() {
	var btn = document.getElementById('btnt');
	gameactive = 1;
	score = 0;
	cscore = 0;
	document.getElementById('btn1').style.width = '150px';
	btn.innerHTML = 'End Game';
	document.getElementById('qs1').style.display = 'block';
	document.getElementById('qs2').style.display = 'block';
	document.getElementById('intscore').style.display = 'block';
}

function restart() {
	var btn = document.getElementById('btnt');
	if(gameactive === 1) {
		score = 0;
		cscore = 0;
		document.getElementById('btn1').style.display = 'block';
		btn.value = 'End Game';
		document.getElementById('qs1').style.display = 'block';
		document.getElementById('qs2').style.display = 'block';
		document.getElementById('inttxt').style.display = 'block';
		document.getElementById('pic').style.display = 'none'; 
		document.getElementById('intscore').style.display = 'block';
		document.getElementById('settings').style.display = 'none';
		document.getElementById('settingsh').style.display = 'none';
		document.getElementById('sapplybtn').style.display = 'none';
		document.getElementById('sresetbtn').style.display = 'none';
		document.getElementById('si').src = "files/settings_icond.png";
	} else if(gameactive === 0 || gameactive === 2) {
		document.getElementById('btn1').style.display = 'block';
		document.getElementById('si').src = "files/settings_icond.png";
		document.getElementById('settings').style.display = 'none';
		document.getElementById('settingsh').style.display = 'none';
		document.getElementById('sapplybtn').style.display = 'none';
		document.getElementById('sresetbtn').style.display = 'none';
	}
	settingsvisibility = 0;
	ucs = 0;
	thememgr();
}

function uchoice(uc) {
	userinputs = 1;
	ucs = 1;
	if(uc === 1) {
		userchoice = 1;
		output();
	} else if(uc === 2) {
		userchoice = 2;
		output();
	} else if(uc === 3) {
		userchoice = 3;
		output();
	}
	document.getElementById('intscore').style.display = 'none';
	document.getElementById('pic').style.display = 'block';
}

function output() {
	document.getElementById('inttxt').style.display = 'none';
	var x = Math.floor((Math.random() * 10) + 1);
	if(x < 4) {
		cchoice = 1;
		document.getElementById('pic').src = 'files/rock.png';
		scorecal();
	} else if(x > 3 && x < 7) {
		cchoice = 2;
		document.getElementById('pic').src = 'files/paper.png';
		scorecal();
	} else if(x < 10) {
		cchoice = 3;
		document.getElementById('pic').src = 'files/scissors.png';
		scorecal();
	} else if(x === 10) {
		output();
	}
}

function scorecal() {
	if(mscore === 0) {
		if(userchoice === 1 && cchoice === 1) {
		}
		else if(userchoice === 1 && cchoice === 2) {
		} 
		else if(userchoice === 1 && cchoice === 3) {
			++score;			
		}
		else if(userchoice === 2 && cchoice === 1) {
			++score;			
		} 
		else if(userchoice === 2 && cchoice === 2) {
		} 
		else if(userchoice === 2 && cchoice === 3) {			
		} 
		else if(userchoice === 3 && cchoice === 1) {
		} 
		else if(userchoice === 3 && cchoice === 2) {
			++score;			
		} 
		else if(userchoice === 3 && cchoice === 3) {
		}
	} 
	else if(mscore === 1 && nscore === 0) {
		if(userchoice === 1 && cchoice === 1) {
		} 
		else if(userchoice === 1 && cchoice === 2 && score > 0) {
			--score;
		} 
		else if(userchoice === 1 && cchoice === 3) {
			++score;
		}
		else if(userchoice === 2 && cchoice === 1) {
			++score;
		} 
		else if(userchoice === 2 && cchoice === 2) {
		} 
		else if(userchoice === 2 && cchoice === 3 && score > 0) {
			--score;			
		} 
		else if(userchoice === 3 && cchoice === 1 && score > 0) {
			--score;			
		} 
		else if(userchoice === 3 && cchoice === 2) {
			++score;			
		} 
		else if(userchoice === 3 && cchoice === 3) {
		}
	}
	else if(mscore === 1 && nscore === 1) {
		if(userchoice === 1 && cchoice === 1) {
		} 
		else if(userchoice === 1 && cchoice === 2) {
			--score;
		} 
		else if(userchoice === 1 && cchoice === 3) {
			++score;
		}
		else if(userchoice === 2 && cchoice === 1) {
			++score;
		} 
		else if(userchoice === 2 && cchoice === 2) {
		} 
		else if(userchoice === 2 && cchoice === 3) {
			--score;			
		} 
		else if(userchoice === 3 && cchoice === 1) {
			--score;			
		} 
		else if(userchoice === 3 && cchoice === 2) {
			++score;			
		} 
		else if(userchoice === 3 && cchoice === 3) {
		}
	}
	scoredis();
}

function scoredis() {
	document.getElementById('intscore').style.display = 'none';
	document.getElementById('scoredis').style.display = 'block';
	document.getElementById('scoredis').innerHTML = 'Your Score: ' + score;
	cscorecal();
}

function cscorecal() {
	if(mscore === 0) {
		if(userchoice === 1 && cchoice === 1) {
		} 
		else if(userchoice === 1 && cchoice === 2) {
			++cscore;
		} 
		else if(userchoice === 1 && cchoice === 3) {
		} 
		else if(userchoice === 2 && cchoice === 1) {
		} 
		else if(userchoice === 2 && cchoice === 2) {
		} 
		else if(userchoice === 2 && cchoice === 3) {
			++cscore;
		} 
		else if(userchoice === 3 && cchoice === 1) {
			++cscore;
		} 
		else if(userchoice === 3 && cchoice === 2) {
		} 
		else if(userchoice === 3 && cchoice === 3) {
		}
	} 
	else if(mscore === 1 && nscore === 0) {
		if(userchoice === 1 && cchoice === 1) {
		} 
		else if(userchoice === 1 && cchoice === 2) {
			++cscore;
		} 
		else if(userchoice === 1 && cchoice === 3 && cscore > 0) {
			--cscore;
		} 
		else if(userchoice === 2 && cchoice === 1 && cscore > 0) {
			--cscore;
		} 
		else if(userchoice === 2 && cchoice === 2) {
		} 
		else if(userchoice === 2 && cchoice === 3) {
			++cscore;
		} 
		else if(userchoice === 3 && cchoice === 1) {
			++cscore;
		} 
		else if(userchoice === 3 && cchoice === 2 && cscore > 0) {
			--cscore;
		} 
		else if(userchoice === 3 && cchoice === 3) {
		}
	}
	else if(mscore === 1 && nscore === 1) {
		if(userchoice === 1 && cchoice === 1) {
		} 
		else if(userchoice === 1 && cchoice === 2) {
			++cscore;
		} 
		else if(userchoice === 1 && cchoice === 3) {
			--cscore;
		} 
		else if(userchoice === 2 && cchoice === 1) {
			--cscore;
		} 
		else if(userchoice === 2 && cchoice === 2) {
		} 
		else if(userchoice === 2 && cchoice === 3) {
			++cscore;
		} 
		else if(userchoice === 3 && cchoice === 1) {
			++cscore;
		} 
		else if(userchoice === 3 && cchoice === 2) {
			--cscore;
		} 
		else if(userchoice === 3 && cchoice === 3) {
		}
	}
	cscoredis();
}

function cscoredis() {
	document.getElementById('intscore').style.display = 'none';
	document.getElementById('cscoredis').style.display = 'block';
	document.getElementById('cscoredis').innerHTML = 'Computer Score: ' + cscore;
}

function settingsv() {
	if(settingsvisibility === 0) {
		settingsvisibility = 1;
		document.getElementById('settings').style.display = 'block';
		document.getElementById('settingsh').style.display = 'block';
		document.getElementById('si').src = "files/game_icon2d.png";
		document.getElementById('btn1').style.display = 'none';
		document.getElementById('qs1').style.display = 'none';
		document.getElementById('qs2').style.display = 'none';
		document.getElementById('intscore').style.display = 'none';
		document.getElementById('scoredis').style.display = 'none';
		document.getElementById('cscoredis').style.display = 'none';
		rdv();		
	}
	else if(settingsvisibility === 1 && userinputs === 1) {
		settingsvisibility = 0;
		document.getElementById('btn1').style.display = 'block';
		document.getElementById('settings').style.display = 'none';
		document.getElementById('settingsh').style.display = 'none';
		document.getElementById('sapplybtn').style.display = 'none';
		document.getElementById('sresetbtn').style.display = 'none';
		document.getElementById('si').src = "files/settings_icond.png";
		if(gameactive === 1) {
			document.getElementById('qs1').style.display = 'block';
			document.getElementById('qs2').style.display = 'block';
			document.getElementById('scoredis').style.display = 'block';
			document.getElementById('cscoredis').style.display = 'block';
		}
	}
	else if(settingsvisibility === 1 && userinputs === 0) {
		settingsvisibility = 0;
		document.getElementById('btn1').style.display = 'block';
		document.getElementById('settings').style.display = 'none';
		document.getElementById('settingsh').style.display = 'none';
		document.getElementById('sapplybtn').style.display = 'none';
		document.getElementById('sresetbtn').style.display = 'none';
		document.getElementById('si').src = "files/settings_icond.png";
		if(gameactive === 1) {
			document.getElementById('qs1').style.display = 'block';
			document.getElementById('qs2').style.display = 'block';
			document.getElementById('intscore').style.display = 'block';
		}
	}
	setmgr();
}

function mscorefn(){
	var mscores = document.getElementById('mscore').checked;
	if (mscores === true && mscore === 1){
		msio = 0;
		sms1 = 1;
	}
	else if (mscores === true && mscore === 0){
		msio = 0;
		sms1 = 0;		
	}
	else if(mscores === false && mscore === 0){
		msio = 1;
		sms1 = 1;
	}
	else if(mscores === false && mscore === 1){
		msio = 1;	
		sms1 = 0;
	}
	smst();
}

function applyset() {
	var confirmc = confirm("This restarts the game, sure to proceed?");
	if(confirmc === true){
		if(msio === 1 && nsio === 0 && tio === 0) {
			mscore = 1;
			nscore = 0;
			theme = 0;
		}
		else if(msio === 1 && nsio === 0 && tio === 1) {
			mscore = 1;
			nscore = 0;
			theme = 1;
		}
		else if( msio === 1 && nsio === 1 && tio === 0) {
			mscore = 1;
			nscore = 1;
			theme = 0;
		}
		else if( msio === 1 && nsio === 1 && tio === 1) {
			mscore = 1;
			nscore = 1;
			theme = 1;
		}
		else if( msio === 0 && tio === 0){
			mscore = 0;
			nscore = 0;
			theme = 0;
		}	
		else if( msio === 0 && tio === 1){
			mscore = 0;
			nscore = 0;
			theme = 1;
		}
		sms1 = 0;
		sms2 = 0;
		sms3 = 0;
		restart();
	}
}

function nscorev(){
	if(msio === 1){
		document.getElementById('ns').style.display = 'block';
	}
	else if(msio === 0){
		document.getElementById('ns').style.display = 'none';
		sms2 = 0;
	}
}

function nscorefn(){
	var nscores = document.getElementById('nscore').checked;
	if (nscores === true && nscore === 0){
		nsio = 0;
		sms2 = 0;
	}
	else if(nscores === true && nscore === 1){
		nsio = 0;
		sms2 = 1;
	}
	else if(nscores === false && nscore === 1){
		nsio = 1;
		sms2 = 0;	
	}
	else if(nscores === false && nscore === 0){
		nsio = 1;
		sms2 = 1;
	}
	smst();
}

function setmgr(){
	if(mscore === 0 && theme === 0){
		document.getElementById('ns').style.display = 'none';
		document.getElementById('mscore').checked = true;
		document.getElementById('nscore').checked = true;
		document.getElementById('theme').value = 'light';
	}
	else if(mscore === 0 && theme === 1){
		document.getElementById('ns').style.display = 'none';
		document.getElementById('mscore').checked = true;
		document.getElementById('nscore').checked = true;
		document.getElementById('theme').value = 'dark';
	}
	else if(mscore === 1 && nscore === 0 && theme === 0){
		document.getElementById('mscore').checked = false;
		document.getElementById('nscore').checked = true;
		document.getElementById('theme').value = 'light';
	}
	else if(mscore === 1 && nscore === 0 && theme === 1){
		document.getElementById('mscore').checked = false;
		document.getElementById('nscore').checked = true;
		document.getElementById('theme').value = 'dark';
	}
	else if(mscore === 1 && nscore === 1 && theme === 0){
		document.getElementById('mscore').checked = false;
		document.getElementById('nscore').checked = false;
		document.getElementById('theme').value = 'light';
	}
	else if(mscore === 1 && nscore === 1 && theme === 1){
		document.getElementById('mscore').checked = false;
		document.getElementById('nscore').checked = false;
		document.getElementById('theme').value = 'dark';
	}
}

function sreset(){
	var confirmc = confirm("This restarts the game, sure to proceed?");
	if (confirmc === true){
	mscore = 0;
	nscore = 0;
	theme = 0;
	restart();
	}
}

function themec(){
	var ts = document.getElementById('theme').value;
	if(ts === 'light' && theme === 0){
		tio = 0;
		sms3 = 0;
	}
	else if(ts === 'light' && theme === 1){
		tio = 0;
		sms3 = 1;
	}
	else if(ts === 'dark' && theme === 0){
		tio = 1;
		sms3 = 1;
	}
	else if(ts === 'dark' && theme === 1){
		tio = 1;
		sms3 = 0;
	}
	smst();
}

function smst(){
	if(sms1 === 1 || sms2 === 1 || sms3 === 1){
		document.getElementById('sapplybtn').style.display = 'block';
	}
	else if(sms1 ===0 && sms2 === 0 && sms3 === 0){
		document.getElementById('sapplybtn').style.display = 'none';
	}
}

function rdv(){
	if(mscore === 0 && nscore === 0 && theme === 0){
		document.getElementById('sresetbtn').style.display = 'none';
	}
	else{
		document.getElementById('sresetbtn').style.display = 'block';
	}
}

setInterval(wb, 500);
	
function wb(){
	if(ucs === 0){
		if (bl === 0){
			document.getElementById('inttxt').style.display = 'none';
			bl = 1;
		}
		else if(bl === 1){
			document.getElementById('inttxt').style.display = 'block';
			bl = 0;
		}
	}
}

function thememgr(){
	if(theme === 0){
		document.body.style.backgroundImage = "url(bi.png)";
		document.getElementById('intscore').style.color = 'blue';
		document.getElementById('inttxt').style.color = '#000000';
		document.getElementById('settings').style.color = '#575757';
		document.getElementById('qs1').style.backgroundImage = "url('bi.png')";
		document.getElementById('qs2').style.backgroundImage = "url('bi.png')";
	}
	else if(theme === 1){
		document.body.style.backgroundImage = "url(bi2.png)";
		document.getElementById('intscore').style.color = '#ffffff';
		document.getElementById('inttxt').style.color = '#ffffff';
		document.getElementById('settings').style.color = '#c9c9c9';
		document.getElementById('qs1').style.backgroundImage = "url(bi2.png)";
		document.getElementById('qs2').style.backgroundImage = "url('bi2.png')";
	}
}

var cchoice = 0;
var scoreint = 0;
var cscoreint = 0;
var gameactive = 0;
var userchoice = 0;
var score = scoreint;
var x = 0;
var cscore = cscoreint;
var settingsvisibility = 0;
var nscorestatus = 0;
var cscorecals = 0;
var userinputs = 0;
var msio = 0;
var mscore = 0;
var nsio = 0;
var nscore = 0;
var tio = 0;
var theme = 0;
var sms1 = 0;
var sms2 = 0;
var sms3 = 0;
var bl = 0;
var ucs = 0;