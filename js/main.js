  ////Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
  
  
  
  
  // total money var

// update dom show 995 or 950
    //event min
        // check for winn function 
        //ifwon
        //addmoneytotal
        //else
            //removemoneytotal

    //event max

    //check for win 
    //let reel1=math.random
    // math.random x3
    //if reel1==reel2 && reel2== reel3 
        //returntrue
        //else will be false

        /**
         *win function (needs bet value min 5 or max 50)
         checks if player won... if player wins add bet to toatal = bet(parameter) * 10
         
         
         */


    document.querySelector("#five").addEventListener("click" , playFive)
    document.querySelector("#fifty").addEventListener("click" , playFifty)

    let playerTotal = 1000
    let pics = ["css/download.jpg", "css/lemon.jpg", "css/bell.jpg", "css/bar.jpg", "css/7.jpg"]
    

    function playFive(){

    let s1= pics[Math.floor(Math.random() * 5)]
    let s2= pics[Math.floor(Math.random() * 5)]
    let s3= pics[Math.floor(Math.random() * 5)]
    let bet = 5



      if(playerTotal < bet){
        document.querySelector("#zero").innerText = "OUT OF MONEY"

    }else if(s1 ==  s2 && s2 == s3 && s3 == s1){
        document.querySelector("#slot1").src = s1
        document.querySelector("#slot2").src = s2
        document.querySelector("#slot3").src = s3
        
  
      

          console.log("you win!")
          document.querySelector("#outcome").innerText = "You Win!"
          playerTotal += bet * 10
          document.querySelector("#total").innerText = playerTotal

      } else{
        document.querySelector("#slot1").src = s1
        document.querySelector("#slot2").src = s2
        document.querySelector("#slot3").src = s3
  

          console.log("you lose")
          document.querySelector("#outcome").innerText = "You lose :("
          playerTotal -= bet 
          document.querySelector("#total").innerText = playerTotal

      }
  }

  function playFifty(){

    let s1= pics[Math.floor(Math.random() * 5)]
    let s2= pics[Math.floor(Math.random() * 5)]
    let s3= pics[Math.floor(Math.random() * 5)]
    let bet = 50

    
    if(playerTotal < bet){
        document.querySelector("#zero").innerText = "OUT OF MONEY"

      


      }else if(s1 == s2 && s2 == s3 && s3 == s1){
        document.querySelector("#slot1").src= s1
        document.querySelector("#slot2").src= s2
        document.querySelector("#slot3").src= s3


          console.log("you win!")
          document.querySelector("#outcome").innerText = "You Win!"
          playerTotal += bet * 10
          document.querySelector("#total").innerText = playerTotal

      } else{
        document.querySelector("#slot1").src= s1
        document.querySelector("#slot2").src= s2
        document.querySelector("#slot3").src= s3
         
        console.log("you lose")
          document.querySelector("#outcome").innerText = "You lose :("
          playerTotal -= bet 
          document.querySelector("#total").innerText = playerTotal


      }
  }

  
    
