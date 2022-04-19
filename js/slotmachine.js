// user starts with 500 dollars stored in a variable
let playerMoney = 500 
document.getElementById('placeToSeeMoney').innerText = playerMoney
// user clicks on min bet and gets three random images 
function getRandomImg(){
    let randomIndex = Math.floor(Math.random() * 5);
    return randomIndex
}
console.log(getRandomImg())

const imgArray = ['meeseeks.png','morty.png','picklerick.png','rick.png','pops.png']

function getMoney(){
    // randomize images that will appear
    
	var playerSpin= getRandomImg();
	;
}
// user clicks on max bet and gets three random images
// user clicks on $10 bet and gets three random images
// user clicks on $20 bet and gets three random images
// user clicks on $50 bet and gets three random images