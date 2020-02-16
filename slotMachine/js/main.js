// 

document.getElementById("startButton").addEventListener("click",function(){
  var bet = document.getElementById("placeBets").value
  var betNum = parseInt(bet)
  getRandomImage(betNum)
})

var money = 1000
document.getElementById("money").innerHTML= money

function getRandomImage(betNum){
  var images = ["./img/catLady.png", "./img/cryingJordan.jpg","./img/doge.png", "./img/jerry.png", "./img/pepe.jpg"]
  var imgLeft = getRandomNum()
  var imgMiddle = getRandomNum()
  var imgRight = getRandomNum()
  document.getElementById("imgLeft").src = images[imgLeft]
  document.getElementById("imgMiddle").src = images[imgMiddle]
  document.getElementById("imgRight").src = images[imgRight]
  checkWin(imgLeft, imgRight, imgMiddle, betNum)
}

function getRandomNum(){
  var num = Math.random() * 5;
  var randomNum = Math.floor(num)
  return randomNum
}

function checkWin(imgLeft, imgRight, imgMiddle, betNum){
  if((imgLeft === imgMiddle) &&( imgMiddle === imgRight)){
    money = betNum*10 + money
    document.getElementById("message").innerHTML="Jackpot"
  }
  else{
    money = money - betNum
    document.getElementById("message").innerHTML="Try Again"
  }
  document.getElementById("money").innerHTML= money
}
