let cars=['nsx','skyline','mazda','silvia','nissanZ']
let money=10000

// status of wallet
function wallet(){
  document.querySelector('#wallet').innerText=money
}
wallet()
document.querySelector('#min').addEventListener('click',playSlotsMin)
minBet=250
document.querySelector('#minTwo').addEventListener('click',playSlotsMinTwo)
minTwoBet=1000
document.querySelector('#max').addEventListener('click',playSlotsMax)
maxBet=2500
audio.volume=0.2





// listen for play button to start game

// starts game
function playSlotsMin(){
  if (money > 249){
    // choose a random number
    let first=Math.floor(Math.random() * 5)
    let second= Math.floor(Math.random()*5)
    let third=Math.floor(Math.random()*5)
    // give each slot a variable
    let firstCar =cars[first]
    let secondCar =cars[second]
    let thirdCar = cars[third]
    console.log(firstCar,secondCar,thirdCar)
    document.getElementById("slotA").classList=firstCar
    document.getElementById("slotB").classList=secondCar
    document.getElementById("slotC").classList=thirdCar
    if ( firstCar===secondCar && secondCar===thirdCar){
      audio.play()
      money=money+2500
      alert('YOU WON')
    }else{
      money=money-250
    }

  }else if(money< 250){
    alert('YOU LOST')
  }
  document.querySelector('#wallet').innerText='WINNINGS: '+ money
  }

  function playSlotsMinTwo(){
    if (money > 999){
      // choose a random number
      let first=Math.floor(Math.random() * 5)
      let second= Math.floor(Math.random()*5)
      let third=Math.floor(Math.random()*5)
      // give each slot a variable
      let firstCar =cars[first]
      let secondCar =cars[second]
      let thirdCar = cars[third]
      console.log(firstCar,secondCar,thirdCar)
      document.getElementById("slotA").classList=firstCar
      document.getElementById("slotB").classList=secondCar
      document.getElementById("slotC").classList=thirdCar
      if ( firstCar===secondCar && secondCar===thirdCar){
        audio.play()
        money=money+10000
        alert('YOU WON')
      }else{
        money=money-1000
      }

    }else if(money< 250){
      alert('YOU LOST')
    }
    document.querySelector('#wallet').innerText='WINNINGS: '+ money
    }
    function playSlotsMax(){
      if (money > 2499){
        // choose a random number
        let first=Math.floor(Math.random() * 5)
        let second= Math.floor(Math.random()*5)
        let third=Math.floor(Math.random()*5)
        // give each slot a variable
        let firstCar =cars[first]
        let secondCar =cars[second]
        let thirdCar = cars[third]
        console.log(firstCar,secondCar,thirdCar)
        document.getElementById("slotA").classList=firstCar
        document.getElementById("slotB").classList=secondCar
        document.getElementById("slotC").classList=thirdCar
        if ( firstCar===secondCar && secondCar===thirdCar){
          audio.play()
          money=money+25000
          alert('YOU WON')
        }else{
          money=money-2500
        }

      }else if(money<250){
        alert('YOU LOST')
      }
      document.querySelector('#wallet').innerText='WINNINGS: '+ money
      }
