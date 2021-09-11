document.getElementById('minbet').addEventListener('click', function(){playSlots(5)});
document.getElementById('maxbet').addEventListener('click', function(){playSlots(50)});

let bar = 'BAR';
let seven = 'SEVEN';
let coin = 'COIN';
let fruit = 'FRUIT';
let gem = 'GEM';

let symbolArray = [bar,seven,coin,fruit,gem];

var money = 1000;
var counter = 0;

var current = 0;

var stops = []

document.getElementById('totalMoney').innerHTML = 'Your Money: $'+money;

function spinReel(reel,i){
	reel.innerHTML = symbolArray[i]
}

function takeMoney(bet){
	money = money - bet;
	document.getElementById('totalMoney').innerHTML = 'Your Money: $'+money;
}

function giveMoney(bet){
	money = money + (bet*2);
	document.getElementById('totalMoney').innerHTML = 'Your Money: $'+money;
}

function setStops(){
	stops = [((Math.random())*100),((Math.random())*125),((Math.random())*150)];
	stops = stops.sort(function(a, b){return a - b});
}
function checkForWin(bet){
	if((document.getElementById('reelone').innerHTML == document.getElementById('reeltwo').innerHTML) 
		&& (document.getElementById('reelone').innerHTML == document.getElementById('reelthree').innerHTML) 
		&& (document.getElementById('reeltwo').innerHTML == document.getElementById('reelthree').innerHTML)){
			giveMoney(bet);
		}
}

function disableButtons(){
	var btns = document.getElementsByTagName("button");
	for (let i = 0; i < btns.length; i++) {
		btns[i].disabled = true;
	}
}

function enableButtons(){
	var btns = document.getElementsByTagName("button");
	for (let i = 0; i < btns.length; i++) {
		btns[i].disabled = false;
	}
}

function playSlots(bet){
	if(money >= bet){
		disableButtons();
		takeMoney(bet);
		setStops();
		var play = setInterval(function spin(){
			if(current > 4){
				current = 0;
			}
			counter ++;
			if(counter < stops[0]){
				spinReel(document.getElementById('reelone'), current);
			}
			if(counter < stops[1]){
				spinReel(document.getElementById('reeltwo'), current);
			}
			if(counter < stops[2]){
				spinReel(document.getElementById('reelthree'), current);
			}
			if(counter > stops[2]){
				checkForWin(bet);
				enableButtons();
				counter = 0;
				clearInterval(play);
			}
			else{
				current ++;
			}
		},100);
	}
}