//worked on with Calvin Asiah Aiperi Vanessa Victor Zahmir
//consulted with Ken Zikre Raymind sebastian eric 
// Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels
// - user should be able to bet min or max and have their total update aka how much money they have won or lost.
// Min bet does $5 and Max bet does $50. They should start with $1000.
// Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet
let money = 1000
let randomBoxOne = undefined;
let randomBoxTwo = undefined;
let randomBoxThree = undefined;

// - user should be able to bet min or max - and have their total update aka how much money they have won or lost.
document.querySelector("#moneyLabel").innerHTML = money


//Build a simple slot machine with minimum 5 items per reel and 3 reels
document.querySelector("#play").addEventListener("click",function (){
  let bet = document.querySelector("#betInput").value
  console.log(bet);
  if (bet > money){
    alert ('Not enough Money')
    return
  }
  money = money - bet
  document.querySelector("#moneyLabel").innerHTML = money
  // if (randomBoxOne === randomBoxTwo === randomBoxThree){
  //   //money = money + (bet * 10)
  //   alert ('WINNER')
  // }



  //*********************** Verify that if user has less than 5$ then game wont work*******************
  let randomImagesOne = ["a1", "b1", "c1", "d1", "e1"];
  let randomImagesTwo = ["a2", "b2", "c2", "d2", "e2"];
  let randomImagesThree = ["a3", "b3", "c3", "d3", "e3"];
  // let randomImages = ["Apple.jpg", "Banana.jpg", "Carrot.jpg", "D", "E"];
// slot one
  let boxOneRandomImage = randomImagesOne[Math.floor(Math.random()*randomImagesOne.length)];
  if (randomBoxOne !== undefined ){
    document.getElementById(randomBoxOne).style.display = "none"
  }
  document.getElementById(boxOneRandomImage).style.display = "inline"
  randomBoxOne = boxOneRandomImage


// slot two
  let boxTwoRandomImage = randomImagesTwo[Math.floor(Math.random()*randomImagesTwo.length)];
  if (randomBoxTwo !== undefined ){
    document.getElementById(randomBoxTwo).style.display = "none"
  }
  document.getElementById(boxTwoRandomImage).style.display = "inline"
  randomBoxTwo = boxTwoRandomImage

// slot three

  let boxThreeRandomImage = randomImagesThree[Math.floor(Math.random()*randomImagesThree.length)];
  if (randomBoxThree !== undefined ){
    document.getElementById(randomBoxThree).style.display = "none"
  }
  document.getElementById(boxThreeRandomImage).style.display = "inline"
  randomBoxThree = boxThreeRandomImage






  // document.querySelector("#img1").src = machine;
   document.querySelector("#box1").innerHTML = machine
  //Refrencing the LET variable
    machine = randomImages[Math.floor(Math.random()*randomImages.length)];
    document.querySelector("#box2").innerHTML = machine

   machine = randomImages[Math.floor(Math.random()*randomImages.length)];
   document.querySelector("#box3").innerHTML = machine
});




/*********************Set alert "you have won" to the screen CODE below*************/
// if (reel1 == reel2 && reel1 == reel3)
//     alert("You've won");
//  var balance = 1000
// Random Letter appears

// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine
//
// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine

// let randomImages = ["A", "B", "C", "D", "E"];
// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine
//
// let randomImages = ["A", "B", "C", "D", "E"];
// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine

// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine;
//
// let randomImages = ["A", "B", "C", "D", "E"];
// let machine = randomImages[Math.floor(Math.random()*randomImages.length)];
// document.body.innerHTML = machine;
//
// // document.addEventListener("click", () =>)
//
// // event.preventDefault()
