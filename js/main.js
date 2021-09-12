/*create 3 box slot machine
requirements:
min button: $5, max button: $50
player starts at $1000;
if player gets all three matching, player wins 10 times what they bet
if player loses, they lose the amount 
return player total*/

//variables
const windows = document.querySelectorAll("section");
const leftBox = document.getElementById("left");
const middleBox = document.getElementById("middle");
const rightBox = document.getElementById("right");
const betFive = document.getElementById("fiver");
const betFifty = document.getElementById("fiftyCent");
const wallet = document.getElementById("wallet");
const message = document.getElementById("message");


//functions

function playerBetsFive(){
    if(wallet.textContent === "0"){
        leftBox.textContent = "";
        middleBox.textContent = "";
        rightBox.textContent = "";
        return message.textContent = "All the losers get stickers!"
    }

   leftBox.textContent = Math.ceil(Math.random() *3);
   middleBox.textContent = Math.ceil(Math.random() *3);
   rightBox.textContent = Math.ceil(Math.random() *3);
    if(leftBox.textContent === middleBox.textContent && leftBox.textContent === rightBox.textContent){
        wallet.textContent = parseInt(wallet.textContent) + (5*10);
        return message.textContent = "Rich people run funny. Must be all the money in their pockets."
    }else{
        wallet.textContent = parseInt(wallet.textContent) - 5;
    }
}

function playerBetsFifty(){
    if(wallet.textContent === "0"){
        leftBox.textContent = "";
        middleBox.textContent = "";
        rightBox.textContent = "";
        return message.textContent = "All the losers get stickers!"
    }

    leftBox.textContent = Math.ceil(Math.random() *3);
    middleBox.textContent = Math.ceil(Math.random() *3);
    rightBox.textContent = Math.ceil(Math.random() *3);
    if(leftBox.textContent === middleBox.textContent && leftBox.textContent === rightBox.textContent){
        wallet.textContent = parseInt(wallet.textContent) + (50*10);
        return message.textContent = "Rich people run funny. Must be all the money in their pockets.";
    }else{
        wallet.textContent = parseInt(wallet.textContent) - 50;
    }
}

//functions calls & event listeners
betFive.addEventListener("click", playerBetsFive);
betFifty.addEventListener("click", playerBetsFifty);


/*document.querySelectorAll("button").forEach(element=>element.addEventListener("click", boxSpin))
let chances = ["pink", "purple", "black", "red", "lightgray"];
*/
/*function boxSpin(){
//console.log(randomNumber);
    for( let i = 0; i < 3; i++ ){
        let randomNumber = Math.floor(Math.random()*chances.length);
        if( i == 0 ){
            leftBox.style.backgroundColor = chances[randomNumber]
        }else if( i == 1){
            middleBox.style.backgroundColor = chances[randomNumber]
        }else{
            rightBox.style.backgroundColor = chances[randomNumber]
        }
    }
}
*/

//pick one color from array and pass it into each box
