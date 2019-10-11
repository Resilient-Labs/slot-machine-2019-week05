//Pseudo Code and Wireframes: Build a simple slot
//machine with minimum 5 items per reel and 3 reels -
// user should be able to bet min or max and have
//their total update aka how much money they have
//won or lost.
//Min bet does $5 and Max bet does $50. They
//should start with $1000. Matches of the three wheels
// = a win just like a normal slot machine and
//they win 10x their bet

//7, cherries,watermelon,strawberries,orange


let zebra = document.querySelectorAll(".button");
zebra.forEach(item => {
  item.addEventListener('click', ()=>{
    let whichButton = event.target.id;
    if (whichButton==="minBet"){myFunction(5);}
    else if (whichButton==="maxBet"){myFunction(50)}
  })
})
var giraffe = document.querySelectorAll(".box");
function myFunction(bet) {
  let x =  Number(document.querySelector("span").textContent);
  if (x<51) {
    return document.querySelector('span').innerHTML= "You have a gambling problem";
  } 
  let whatImage1=0, whatImage2=0, whatImage3=0,whatImage4=0,whatImage5=0;
  for(let i = 0;i<3;i++){
    let random = Math.random();
    if (random<.2){
      // number 7 imag
      giraffe[i].style.backgroundImage = "url(https://cdn3.iconfinder.com/data/icons/casino/256/Lucky_Seven-512.png)";
      whatImage1++;
    }
    else if (random<.4){
      // watermelon img
      giraffe[i].style.backgroundImage = "url(https://cdn3.iconfinder.com/data/icons/casino/256/Watermelon-512.png)";
      whatImage2++;
    }
    else if (random<.6){
      // orange img
      giraffe[i].style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/slot-machines/512/Orange-512.png)";
      whatImage3++;
    }
    else if (random<.8){
      // strawberries img
      giraffe[i].style.backgroundImage = "url(https://cdn3.iconfinder.com/data/icons/aami-flat-casino/64/casino-37-512.png)";
      whatImage4++;
    }
    else {
      // cherry img
      giraffe[i].style.backgroundImage = "url(https://cdn4.iconfinder.com/data/icons/slot-machines/512/Cherry-512.png)";
      whatImage5++;
    }
  }
  let newBet = bet*-10;
  if(whatImage1===3||whatImage2===3||whatImage3===3||whatImage4===3||whatImage5===3){
    document.querySelector('span').innerHTML -= newBet;
  }else {
    document.querySelector('span').innerHTML -= bet;
  }
}
