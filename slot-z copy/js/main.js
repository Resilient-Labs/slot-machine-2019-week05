let min = document.querySelector(".min")
let max = document.querySelector(".max")
let reel1 = document.getElementById('reel1')
let reel2 = document.getElementById('reel2')
let reel3 = document.getElementById('reel3')
let bala = document.getElementById('balance')

//the functions below active a function on the click of the min or max button
min.addEventListener("click", function(){
  let parsedValue= parseInt(bala.innerHTML)
  if (5 <= parsedValue){
    spinTheWheel()
  }
   // console.log("5")
})
max.addEventListener("click", function(){
  let parsedValue= parseInt(bala.innerHTML)
  if (50 <= parsedValue){
    spinTheWheelFifty()
  }
   // spinTheWheelFifty()
   // console.log("50")
})
let images = ["images/watermelon.png","images/bell.png", "images/cherry.png", "images/lemon.png", "images/orange.png"]
// let images = ["images/watermelon.png","images/bell.png"]
function spinTheWheel(){  // this function produces 3 random numbers && compares them to see if the user wins or loses

  let val1 = Math.floor(Math.random()*images.length)
  let val2 = Math.floor(Math.random()*images.length)
  let val3 = Math.floor(Math.random()*images.length)
  // console.log(reel1)
  reel1.src = images[val1];
  reel2.src = images[val2];
  reel3.src = images[val3];

  // console.log(reel1,reel2,reel3);
  checkWin(val1,val2,val3)
}
function checkWin(x,y,z){
  if((x==y) && (x==z)){
    let parsedValue= parseInt(bala.innerHTML)+50
    // console.log (parsedValue)
    bala.innerHTML=parsedValue
    // bala.innerHTML+=50
    if(x==0){
      const video=document.querySelector("video")
      video.style.opacity=1
      video.play()
    }
    // console.log("win")
  }else{
    bala.innerHTML-=5
    // console.log("Lose")
  }
}

function spinTheWheelFifty(){// this function produces 3 random numbers && compares them to see if the user wins or loses

  let val1 = Math.floor(Math.random()*images.length)
  let val2 = Math.floor(Math.random()*images.length)
  let val3 = Math.floor(Math.random()*images.length)
  // console.log(val1)
  reel1.src = images[val1];
  reel2.src = images[val2];
  reel3.src = images[val3];

  // console.log(reel1,reel2,reel3);
  checkWinFifty(val1,val2,val3)
}

function checkWinFifty(x,y,z){
  if(x==y && x==z){
    let parsedValue= parseInt(bala.innerHTML)+500

    bala.innerHTML= parsedValue
    if(x==0){
      const video=document.querySelector("video")
      video.style.opacity=1
      video.play()
    }
    // bala.innerHTML+=500
    // console.log("bala");
    // console.log("win")
  }else{
    bala.innerHTML-=50
    // console.log("Lose")
  }
}
