document.getElementById("startButton").addEventListener("click",function(){
  var bet = document.getElementById("placeBets").value
  var betNum = parseInt(bet)
getRandomImage(betNum)
});

var money = 1000
document.getElementById("money").innerHTML = money  
function getRandomImage(betNum){
  var images = ["./img/catLady.png", "./img/cryingJordan.jpg", "./img/doge.png", "./img/jerry.png", "./img/pepe.jpg"];
  var imgLeft = getRandomNumber()
  var imgMiddle = getRandomNumber()
  var imgRight = getRandomNumber()
  // console.log(imgLeft, imgMiddle, imgRight);
  document.getElementById("imgLeft").src = images[imgLeft]
  document.getElementById("imgMiddle").src = images[imgMiddle]
  document.getElementById("imgRight").src = images[imgRight]
  checkWin(imgLeft, imgMiddle, imgRight, betNum)
}

function getRandomNumber(){
  var num = Math.random() * 5;
  var randomNum = Math.floor(num);
  return randomNum
}

function checkWin(imgLeft, imgMiddle, imgRight, betNum){
  if (imgLeft === imgMiddle === imgRight){

    money = money + betNum*10
  }

  else {
    money = money - betNum

  }
  document.getElementById("money").innerHTML = money
}
