// document.querySelector('#spin').onclick =  first was function spin then function compare
function spin(){
  let random = Math.ceil(Math.random()*5)
  console.log(random)

let newAppearance
//another way to do this is to use a array index library that allows you to change what the array lib is at a given time
  if(random <= 1){
    newAppearance = "bell.png"
  }else if (random <= 2){
    newAppearance = "grape.png"
  }else if(random <=3){
    newAppearance ="money_sign.png"
  }else if (random <=4){
    newAppearance ="watermelon.jpg"
  }else {
    newAppearance = "cherry.png"
  }
  return newAppearance
}


  function compare(){

    let result

    let reel1 = spin()
    document.querySelector('#reel1 .img').src = reel1

    let reel2 = spin()
    document.querySelector('#reel2 .img').src = reel2

    let reel3 = spin()
    document.querySelector('#reel3 .img').src = reel3

    if(reel1 === reel2 && reel2 === reel3){
      result = 'winner!'
    }else{
      result = 'loser!'
    }
    return result
}

document.querySelector('#five').onclick = updateBank

document.querySelector('#fifty').onclick = updateBank

let balence = 1000



 function updateBank (){

  let outcome = compare ()

  let bet = parseFloat(this.getAttribute ("data-bet"));



  if(balence >= bet){
    if (outcome == 'winner!'){
      balence = balence + (bet*10)
      setTimeout(() => {
        alert('winner!')
      }, 100)
      document.getElementById("result").innerHTML = "YOU WINNER!!!!!!!!!"
    }else {
      balence = balence - bet
      if(balence <= 0){
        setTimeout(() =>{
          alert('Game Over')
          location.reload(true);
        }, 100)

      }
      document.getElementById("result").innerHTML = "YOU LOSER!!!!!!!!!"
      // setTimeout(() => alert('loser!'), 500)
    }
    document.querySelector('.balence').innerHTML = balence
  }else{
    alert('low funds!')
  }
}
