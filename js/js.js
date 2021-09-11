//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels

//5 constant items
const result = [ "red", "green","blue","pink","tan"]
const totalCredits = document.querySelector("totalCredits")

//2. need to have five items or symbols




//- user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000.
let total = 1000;


//Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet



//starting total
document.querySelector('.yourCredits').innerText = total;

//event handler if five dollar bet placed

document.querySelector('.minBet').addEventListener('click', startingSlow);




//event handler if fifty dollar bet placed
document.querySelector('.maxBet').addEventListener('click', winBiG);

function makesBet(){
  let value = Math.floor(Math.random() * 5)
  let box
  if (value <= 1){
    box = result[0]
  }
  else if(value <= 2){
    box = result[1]
  }
  else if(value <= 3){
    box = result[2]
  }
  else if(value <= 4){
    box = result[3]
  }
  else if(value <= 5){
    box = result [4]
  }
  return box;
}

//function winBig (){
  //let betsFiftyDollars = 50;

 // let outcomeForboxOne = randomNumber();
  //document.querySelector('boxOne').innerText = outcomeForBoxOne

  //let outcomeForboxTwo = randomNumber();
 // document.querySelector('boxTwo').innerText = outcomeForboxTwo

 // let outcomeForBoxThree = randonNumber();
 // document.querySelector('boxThree').innerText = outcomeForBoxThree}

 function startingSlow(){
   const boxOne = makesBet()
   const boxTwo = makesBet()
   const boxThree= makesBet()
   winOrLose(boxOne,boxTwo,boxThree)
   updateCredits(boxOne,boxTwo,boxThree)
   updateMoney(boxOne,boxTwo,boxThree)
 }

//function startingSlow(){
  //let betsfivedollars = 5;

//let outcomeForboxOne = randomNumber();
  //document.querySelector('boxOne').innerText = outcomeForBoxOne

 // let outcomeForboxTwo = randomNumber();
  //document.querySelector('boxTwo').innerText = outcomeForboxTwo

 // let outcomeForBoxThree = randonNumber();
 // document.querySelector('boxThree').innerText = outcomeForBoxThree}
