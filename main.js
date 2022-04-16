// //Build a simple slot machine with minimum 5 items per reel and 3 reels
// // possible combinations:
// //2 possible methods, one bets $5 the other bets $50

// // started with $100
// //bet $5 win back what amount x 10 =$50 ?
// //bet $50 win back what amount x10 =$500?
// // display the Cash amount remaining
// // 15 * 14* 13 * 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 *2 *1= 1,307,674,368,000
// // 3 *2*1=6
// //1,307,674,368,000/6= 217,945,728,000 * 479,001,600 = 1.04396352....e20 possible combinations
// // 15!/3!  *  (15- 3)!
// //
// // - user should be able to bet- min $5 or max $50  - methods? floor and ceiling?  and have their total update
// //pseudo code
// //conditonal=all the #'s have to equal each other
// //else the player looses
// //how many tries do you get? 3?

// //variables
// const max = document.querySelector('#max')
// const min = document.querySelector('#min')
// const message = document.querySelector('#message')
// const cash = document.querySelector('#cash')
// const numberOne = document.querySelector('#numberOne')
// const numberTwo = document.querySelector('#numberTwo')
// const numberThree = document.querySelector('#numberThree')

// //random # generator & make # a whole #

// function generateNumber(){
//   return Math.ceil(Math.random() * 5)

// }

// //functions  & conditionals

// function spinReel(){
//    if(parseInt(cash.innerText) === 0 ){
//     message.innerText= "You're Done :( "
//     return
//    }

//   numberOne.innerText = generateNumber()
//   numberTwo.innerText = generateNumber()
//   numberThree.innerText = generateNumber()
//   if (numberOne.innerText === numberTwo.innerText && numberThree.innerText === numberOne.innerText){
//       //if the condition is true, then multiply the value bet by 10 and display in in the #message element by increasing that amount by $50
//       let stringToNumber = parseInt(cash.innerText)
//        cash.innerText = stringToNumber + 50

//   }else{
//     let stringToNumber = parseInt(cash.innerText)
//        cash.innerText = stringToNumber - 5
//   }
// }

// function spinReel2(){
//   if(parseInt(cash.innerText) === 0 ){
//     message.innerText= "You're Done :( "
//     return
//    }

//   numberOne.innerText = generateNumber()
//   numberTwo.innerText = generateNumber()
//   numberThree.innerText = generateNumber()
//   if (numberOne.innerText === numberTwo.innerText && numberThree.innerText === numberOne.innerText){
//       //if the condition is true, then multiply the value bet by 10 and display in in the #message element by increasing that amount by $50
//       let stringToNumber = parseInt(cash.innerText)
//        cash.innerText = stringToNumber + 500

//   }else{
//     let stringToNumber = parseInt(cash.innerText)
//        cash.innerText = stringToNumber - 50
//   }
// }

// //event listeners

// min.addEventListener('click',spinReel)

// max.addEventListener('click', spinReel2)

//variables

const min = document.querySelector("#min");
const max = document.querySelector("#max");
const message = document.querySelector("#message");
const numberOne = document.querySelector("#numberOne");
const numberTwo = document.querySelector("#numberTwo");
const numberThree = document.querySelector("#numberThree");
const cash = document.querySelector("#cash");

//functions & conditionals
// if cash reaches 0 then stop the function
// one function for if the value is
function betMin() {
  //<= is comparison not assignment even though it's just one = , its a syntax thing, it's still just comparing both values NOT reassigning 
  if (Number(cash.innerText) <= '0') {
    message.innerText = "You're done! :( ";
    cash.innerText='0'
    return;
  }

  //"else", implied by default
  numberOne.innerText = randomNumberGenerator();
  numberTwo.innerText = randomNumberGenerator();
  numberThree.innerText = randomNumberGenerator();

  if (
    numberOne.innerText === numberTwo.innerText &&
    numberThree.innerText === numberOne.innerText
  ) {
    cash.innerText = Number(cash.innerText) + 50;
  } else if (Number(cash.innerText) < 0) {
    cash.innerText = "0";
    return;
  } else {
    cash.innerText = Number(cash.innerText) - 5;
  }
}

function betMax() {
  if (Number(cash.innerText) <= 0) {
    message.innerText = "You're done! :( ";
    cash.innerText='0'
    return;
  }
  numberOne.innerText = randomNumberGenerator();
  numberTwo.innerText = randomNumberGenerator();
  numberThree.innerText = randomNumberGenerator();

  if (
    numberOne.innerText === numberTwo.innerText &&
    numberThree.innerText === numberOne.innerText
  ) {
    cash.innerText = Number(cash.innerText) + 500;
  } else if (Number(cash.innerText) <= 0) {
    // cash.innerText = "0";//test?
    // to prevent it from going into the 
    //negatives 
    return;
  } else {
  
    cash.innerText = Number(cash.innerText) - 50;
  }
}

//function to generate random # and convert string to number
function randomNumberGenerator() {
  return Math.ceil(Math.random() * 5);
  //Math.ceil is the method, Math. random (doesn't take an argument)  is the argument
}

//event listener

min.addEventListener("click", betMin);
max.addEventListener("click", betMax);

//if(amount.innerText <= '0'){
// return

//}



//note: make a conditional or function to stop it from going negative though the math example  $ 45-50 = -5, maybe make a conditonal that makes it so that if the diffrence between the 2 values, is less than 0 reassing to 0 ?
