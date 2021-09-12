//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel 
//and 3 reels - user should be able to bet min or max and have their total update aka 
//how much money they have won or lost. Min bet does $5 and Max bet does $50. They should 
//start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x 

//A section
    //Row of 3 boxes - div
        //5 images in each box div
        //Each item should have a number value
        //function which grabs random numbers with math.random() from each box value
        //function when 3 numbers match to 10x max bet if not -50 from total
        
//A section
    //Min Button for user - button should have function to add +5 onclick to total
    //Max button for user - button should have function to add +50 onclick to total
    //Starting value should be 1000 - which should be in a varible

let img = document.createElement("img");

//Gets random num from 1-5
let bread = 1000;
let min = 5;
let max = 50;
document.getElementById('play').addEventListener('click', spin)
let money = document.getElementById('money').innerHTML = bread;
document.getElementById('max').addEventListener('click', addMax)
document.getElementById('min').addEventListener('click', addMin)

function addMax() {
    let newBread = bread + max
    document.getElementById('money').innerHTML = newBread;
    if ( !item1.innerHTML === item2.innerHTML && !item1.innerHTML === item3.innerHTML) {
        document.getElementById('money').innerHTML = bread - 50
    }
    
}
function addMin() {
    let newBread = bread + min
    document.getElementById('money').innerHTML = newBread;
    if ( !item1.innerHTML === item2.innerHTML && !item1.innerHTML === item3.innerHTML) {
        document.getElementById('money').innerHTML = bread - 5
    }
}
function getRandomNumber() {
    let randomNum = Math.floor( Math.random() * 5 )
    return randomNum
}

function spin() {
    let item1 = document.querySelector('.numOne')
    let item2 = document.querySelector('.numTwo')
    let item3 = document.querySelector('.numThree')


    item1.innerHTML = getRandomNumber()
    item2.innerHTML = getRandomNumber()
    item3.innerHTML = getRandomNumber()
    //first backgroung image
    if(item1.innerHTML == 0) {
        document.querySelector('#firstImg').src = './images/bar.png'
    } else if(item1.innerHTML == 1) {
        document.querySelector('#firstImg').src = './images/bell.png'
    } else if(item1.innerHTML == 2) {
        document.querySelector('#firstImg').src = './images/cherry.jpeg'
    } else if(item1.innerHTML == 3) {
        document.querySelector('#firstImg').src = './images/lemon.png'
    } else if(item1.innerHTML == 4) {
        document.querySelector('#firstImg').src = './images/slotSeven.jpeg'
    }
     //second backgroung image
     if(item2.innerHTML == 0) {
        console.log('hi')
        let img = new Image();
        img.src = './images/bar.png';
        document.querySelector('#secondImg').src = './images/bar.png'
    } else if(item2.innerHTML == 1) {
        console.log('hi')
        let img = new Image();
        img.src = './images/bell.png';
        document.querySelector('#secondImg').src = './images/bell.png'
    } else if(item2.innerHTML == 2) {
        console.log('hi')
        let img = new Image();
        img.src = './images/cherry.jpeg';
        document.querySelector('#secondImg').src = './images/cherry.jpeg'
    } else if(item2.innerHTML == 3) {
        console.log('hi')
        let img = new Image();
        img.src = './images/lemon.png';
        document.querySelector('#secondImg').src = './images/lemon.png'
    } else if(item2.innerHTML == 4) {
        console.log('hi')
        let img = new Image();
        img.src = './images/slotSeven.jpeg';
        document.querySelector('#secondImg').src = './images/slotSeven.jpeg'
    }
    //third backgroung image
    if(item3.innerHTML == 0) {
        console.log('hi')
        let img = new Image();
        img.src = './images/bar.png';
        document.querySelector('#thirdImg').src = './images/bar.png'
    } else if(item3.innerHTML == 1) {
        console.log('hi')
        let img = new Image();
        img.src = './images/bell.png';
        document.querySelector('#thirdImg').src = './images/bell.png'
    } else if(item3.innerHTML == 2) {
        console.log('hi')
        let img = new Image();
        img.src = './images/cherry.jpeg';
        document.querySelector('#thirdImg').src = './images/cherry.jpeg'
    } else if(item3.innerHTML == 3) {
        console.log('hi')
        let img = new Image();
        img.src = './images/lemon.png';
        document.querySelector('#thirdImg').src = './images/lemon.png'
    } else if(item3.innerHTML == 4) {
        console.log('hi')
        let img = new Image();
        img.src = './images/slotSeven.jpeg';
        document.querySelector('#thirdImg').src = './images/slotSeven.jpeg'
    }
   
    if ( item1.innerHTML === item2.innerHTML && item1.innerHTML === item3.innerHTML) {
        bread = bread + (max * 10)
        document.getElementById('money').innerHTML = bread
        alert('winner')
    } else {
        console.log('loser')
        bread = bread - min
        document.getElementById('money').innerHTML = bread
    }

}





