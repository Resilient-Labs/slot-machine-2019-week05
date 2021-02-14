
let funds = 2000


document.getElementById('results').innerText = funds
document.querySelector("#five").addEventListener("click", betFive)
document.querySelector("#fifty").addEventListener("click", betFifty)
document.querySelector("#hundred").addEventListener("click", betHun)

function betFive(){
  funds = funds - 5
  document.querySelector("#results").innerText = funds
  chooseReelOne()
  chooseReelTwo()
  chooseReelThree()
  checkWin()

}
function betFifty(){
  funds = funds - 50
  document.getElementById('results').innerText = funds
  chooseReelOne()
  chooseReelTwo()
  chooseReelThree()
  checkWin2()
}
function betHun(){
  funds = funds - 100
  document.getElementById('results').innerText = funds
  chooseReelOne()
  chooseReelTwo()
  chooseReelThree()
  checkWin2()
}

function chooseReelOne(){
  let randomNumber=Math.random();
  let reel
	if(randomNumber<.2){
		reel="33";
	}
	else if(randomNumber<.4){
		reel="44";
	}else if(randomNumber<.6){
		reel="55"
	}else if(randomNumber<.8){
		reel="66"
  }else{
    reel="77"
  }
  document.querySelector("#slot1").innerText = reel
}

function chooseReelTwo(){
  let randomNumber=Math.random();
  let reel
	if(randomNumber<.2){
		reel="33";
	}
	else if(randomNumber<.4){
		reel="44";
	}else if(randomNumber<.6){
		reel="55"
	}else if(randomNumber<.8){
		reel="66"
  }else{
    reel="77"
  }
  document.querySelector("#slot2").innerText = reel
}

function chooseReelThree(){
  let randomNumber=Math.random();
  let reel
	if(randomNumber<.2){
		reel="33";
	}
	else if(randomNumber<.4){
		reel="44";
	}else if(randomNumber<.6){
		reel="55"
	}else if(randomNumber<.8){
		reel="66"
  }else{
    reel="77"
  }
  document.querySelector("#slot3").innerText = reel
}

function checkWin(){
  if(document.querySelector("#slot1").innerText === document.querySelector("#slot2").innerText && document.querySelector("#slot2").innerText === document.querySelector("#slot3").innerText){
    funds = funds + 100
    document.querySelector("#results").innerText = funds
  }
  else{
    document.querySelector("#results").innerText = funds
  }console.log(document.querySelector("#slot1").innerText,document.querySelector("#slot2").innerText,document.querySelector("#slot3").innerText, document.querySelector("#slot1").innerText === document.querySelector("#slot2").innerText === document.querySelector("#slot3").innerText );
}

function checkWin2(){
  if(document.querySelector("#slot1").innerText === document.querySelector("#slot2").innerText && document.querySelector("#slot2").innerText === document.querySelector("#slot3").innerText){
    funds = funds + 1000
    document.querySelector("#results").innerText = funds
  }
  else{
    document.querySelector("#results").innerText = funds
  }
   
}

