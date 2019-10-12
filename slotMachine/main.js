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


let choice = document.querySelectorAll(".button");
choice.forEach(item => {
  item.addEventListener('click', ()=>{
    let whichButton = event.target.id;
    if (whichButton==="minBet"){myFunction(5)}
    else if (whichButton==="maxBet"){myFunction(50)}
  })
})
var display = document.querySelectorAll(".box");
function myFunction(bet) {
  let whatImage1=0, whatImage2=0, whatImage3=0,whatImage4=0,whatImage5=0;
  for(let i = 0;i<3;i++){
    let random = Math.random();
    if (random<.2){
      // number 7 imag
      display[i].style.backgroundImage = "url(https://cdn.pixabay.com/photo/2016/11/25/07/00/diamond-1857733_960_720.png)";
      whatImage1++;
    }
    else if (random<.4){
      // watermelon img
      display[i].style.backgroundImage = "url(https://st2.depositphotos.com/1968353/7849/v/600/depositphotos_78491592-stock-video-stacked-gold-bars.jpg)";
      whatImage2++;
    }
    else if (random<.6){
      // orange img
      display[i].style.backgroundImage = "url(https://www.pngarts.com/files/3/7-Number-PNG-Image-with-Transparent-Background.png)";
      whatImage3++;
    }
    else if (random<.8){
      // strawberries img
      display[i].style.backgroundImage = "url(https://www.pngarts.com/files/3/Cherry-PNG-Picture.png)";
      whatImage4++;
    }
    else {
      // cherry img
      display[i].style.backgroundImage = "url(https://www.pngarts.com/files/5/Champion-Gold-Cup-PNG-Photo.png)";
      whatImage5++;
    }
  }
  let newBet = bet*-10;
  if (document.querySelector('span').innerHTML == 0){
    alert('Better luck next time!')
  }else if(whatImage1===3||whatImage2===3||whatImage3===3||whatImage4===3||whatImage5===3){
    document.querySelector('span').innerHTML -= newBet;
    alert("YOU WON");
  }else{
     document.querySelector('span').innerHTML -= bet;
    }
}






// EDGE CASE dont let spin contieu when they hit 0 dollars
