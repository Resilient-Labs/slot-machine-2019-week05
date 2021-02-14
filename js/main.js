
let playerMoney = 1000
let balance = document.querySelector('#balance');


// Generate a random Number between 1 - 5
function numberGenerator(e){
  if (Number(balance.textContent) >= Number(document.querySelector('#money').value)){
  let slot1 = Math.round(Math.random() * 5)
  document.querySelector('#slot1').innerText = slot1;

  let slot2 = Math.round(Math.random() * 5)
  document.querySelector('#slot2').innerText = slot2;

  let slot3 = Math.round(Math.random() * 5)
  document.querySelector('#slot3').innerText = slot3;
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
