let funds = 1000
let results = document.getElementById('results')
results.innerText = funds

let slotOne = document.querySelector(".slot1")
let slotTwo = document.querySelector(".slot2")
let slotThr = document.querySelector(".slot3")

document.querySelector("#five").addEventListener("click", betFive)
document.querySelector("#fifty").addEventListener("click", betFifty)

function betFive(){
  funds = funds - 5
  results.innerText = funds
  chooseReelOne()
  chooseReelTwo()
  chooseReelThree()
  checkWin()
  bankrupt()

}
function betFifty(){
  funds = funds - 50
  results.innerText = funds
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
		reel="img/gem.gif";
	}else if(randomNumber<.4){
		reel="img/star.gif";
	}else if(randomNumber<.6){
		reel="img/rock.gif"
	}else if(randomNumber<.8){
		reel="img/seven.gif"
  }else{
    reel="img/duck.gif"
  }
  document.querySelector("#s1").setAttribute("src", reel)
}

function chooseReelTwo(){
  let randomNumber=Math.random();
  let reel
	if(randomNumber<.2){
		reel="img/gem.gif";
	}else if(randomNumber<.4){
		reel="img/star.gif";
	}else if(randomNumber<.6){
		reel="img/rock.gif"
	}else if(randomNumber<.8){
		reel="img/seven.gif"
  }else{
    reel="img/duck.gif"
  }
  document.querySelector("#s2").setAttribute("src", reel)
}
function chooseReelThree(){
  let randomNumber=Math.random();
  let reel
	if(randomNumber<.2){
		reel="img/gem.gif";
	}else if(randomNumber<.4){
		reel="img/star.gif";
	}else if(randomNumber<.6){
		reel="img/rock.gif"
	}else if(randomNumber<.8){
		reel="img/seven.gif"
  }else{
    reel="img/duck.gif"
  }
  document.querySelector("#s3").setAttribute("src", reel)
}


function checkWin(){
  if(slotOne.src === slotTwo.src && slotTwo.src === slotThr.src){
    funds = funds + 50
    results.innerText = funds
    document.querySelector(".jackpot").style.visibility = "visible"
    alert("You're a winner baby!")
  }
  else{
    funds = funds - 10
    results.innerText = funds
  }
}
function checkWin2(){
  if(slotOne.src === slotTwo.src && slotTwo.src === slotThr.src){
    funds = funds + 500
    results.innerText = funds
    document.querySelector(".jackpot").style.visibility = "visible"
    alert("Huzzah! You've won!")
  }
  else{
    funds = funds - 100
    results.innerText = funds
  }
}


function bankrupt(){
  if (funds < 5 ){
    if(confirm("Down to your last Lincoln? Better get a McChicken and call it a night!")){
    window.location.reload()
}
  }else{
    console.log(funds);
  }
}
function bankrupt2(){
  if (funds < 50 ){
    if(confirm("You ran out of money, go tell your family you're poor now!")){
    window.location.reload()
}
  }else{
    console.log(funds);
  }
}
