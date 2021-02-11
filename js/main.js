let angle = 0;
let playerMoney = 1000
let balance = document.querySelector('#balance');
// Using the Object Image to populate the Image
var img1 = new Image();
var img2 = new Image();
var img3 = new Image();

// Generate a random Number between 1 - 5
function numberGenerator(e){
  if (Number(balance.textContent) >= Number(document.querySelector('#money').value)){
  angle += 720;
  document.querySelectorAll('div').forEach((cha) => {
      cha.style.transform = 'rotateX(' + angle + 'deg)';
  });
  /* setTimeout(function(){document.querySelector('#slot1').style.transform = 'rotateX(' + angle + 'deg)'},1000);
  setTimeout(function(){document.querySelector('#slot2').style.transform = 'rotateX(' + angle + 'deg)'},3000);
  setTimeout(function(){document.querySelector('#slot3').style.transform = 'rotateX(' + angle + 'deg)'},5000); */

  let slot1 = Math.floor(Math.random() * 4)
    img1.src = './img' + slot1 +'.jpg'
  document.querySelector('#slot1').appendChild(img1);


  let slot2 = Math.floor(Math.random() * 4)
    img2.src = './img' + slot2 +'.jpg'
  document.querySelector('#slot2').appendChild(img2);

  let slot3 = Math.floor(Math.random() * 4)
    img3.src = './img' + slot3 +'.jpg'
  document.querySelector('#slot3').appendChild(img3);
  if(slot1 === slot2 && slot2 === slot3 && slot1 === slot3 ){
    //alert
    document.querySelector('#results').innerText=`Congratulations,${slot1} ${slot2} ${slot3} You Win`

    winMoney(e.target.value)
//     console.log(balance)
//     parseInt((balance.innerText) += 50);
// }else{
//       parseInt((balance.innerText) -= 5);
}



  else{
document.querySelector('#results').innerText= ""
    looseMoney(e.target.value)
  }
}
}


function winMoney(amount){
 //playerMoney += 50
playerMoney += (document.getElementById('money').value * 10)
  document.querySelector('#balance').innerHTML= playerMoney
}

function looseMoney(amount){
  playerMoney -= document.getElementById('money').value
  //playerMoney -= 5

  document.querySelector('#balance').innerHTML= playerMoney
}


//Event listener for the clicks
document.querySelector('button').addEventListener('click', numberGenerator)
// Betting range for the user

// Keep track on the balance of the user and once it reaches 0, its game Over
