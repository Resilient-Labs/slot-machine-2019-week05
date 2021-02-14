


// let counter = 0
//
// document.getElementById('box1').addEventListener('click', rotate)
//
// function rotate (){
//    document.getElementById("box1").style.transform += 'rotate(45deg)';
//   counter = counter + 1
// }
//
//
//  if (counter === 3){
//   document.getElementById("box2").style.background = "orange"
// }

let funds = 1000


document.getElementById('results').innerText = funds

document.querySelector("#five").addEventListener("click", betFive)
document.querySelector("#fifty").addEventListener("click", betFifty)

function betFive(){
  funds = funds - 5
  document.querySelector("#results").innerText = funds
  chooseReelOne()
  chooseReelTwo()
  chooseReelThree()
  checkWin()
  bankrupt()

}
function betFifty(){
  funds = funds - 50
  document.getElementById('results').innerText = funds
  chooseReelOne()
  chooseReelTwo()
  chooseReelThree()
  checkWin2()
  bankrupt2()

}



function chooseReelOne(){
  let randomNumber=Math.random();
  let reel
	if(randomNumber<.2){
		reel="Gem";
	}
	else if(randomNumber<.4){
		reel="Star";
	}else if(randomNumber<.6){
		reel="Rock"
	}else if(randomNumber<.8){
		reel="7"
  }else{
    reel="Duck"
  }
  document.querySelector("#slot1").innerText = reel
}



function chooseReelTwo(){
  let randomNumber=Math.random();
  let reel
	if(randomNumber<.2){
		reel="Gem";
	}
	else if(randomNumber<.4){
		reel="Star";
	}else if(randomNumber<.6){
		reel="Rock"
	}else if(randomNumber<.8){
		reel="7"
  }else{
    reel="Duck"
  }
  document.querySelector("#slot2").innerText = reel
}
function chooseReelThree(){
  let randomNumber=Math.random();
  let reel
	if(randomNumber<.2){
		reel="Gem";
	}
	else if(randomNumber<.4){
		reel="Star";
	}else if(randomNumber<.6){
		reel="Rock"
	}else if(randomNumber<.8){
		reel="7"
  }else{
    reel="Duck"
  }
  document.querySelector("#slot3").innerText = reel
}

function checkWin(){
  if(document.querySelector("#slot1").innerText === document.querySelector("#slot2").innerText && document.querySelector("#slot2").innerText === document.querySelector("#slot3").innerText){
    funds = funds + 50
    document.querySelector("#results").innerText = funds
    alert("You're a winner baby!")
  }
  else{
    funds = funds - 10
    document.querySelector("#results").innerText = funds
  }console.log(document.querySelector("#slot1").innerText,document.querySelector("#slot2").innerText,document.querySelector("#slot3").innerText, document.querySelector("#slot1").innerText === document.querySelector("#slot2").innerText === document.querySelector("#slot3").innerText );
}
function checkWin2(){
  if(document.querySelector("#slot1").innerText === document.querySelector("#slot2").innerText && document.querySelector("#slot2").innerText === document.querySelector("#slot3").innerText){
    funds = funds + 500
    document.querySelector("#results").innerText = funds
    alert("Huzzah! You've won!")
  }
  else{
    funds = funds - 100
    document.querySelector("#results").innerText = funds
  }
}

function bankrupt(){
  if (funds <5 ){

    if(confirm("Down to your last Lincoln? Better get a McChicken and call it a night!")){
    window.location.reload()
}
  }else{
    console.log(funds);
  }

}
function bankrupt2(){
  if (funds <50 ){

    if(confirm("You ran out of money, go tell your family you're poor now!")){
    window.location.reload()
}
  }else{
    console.log(funds);
  }

}
