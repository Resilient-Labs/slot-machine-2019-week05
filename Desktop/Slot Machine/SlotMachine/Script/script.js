// Francisco helped guide with the variables calculations
// setting my variables in order to grab the class and Id from the html. Using querrySelctor because I can pass any types of elements
var firstWheel = document.querySelector('.firstWheel');
var secondWheel = document.querySelector('.secondWheel');
var thirdWheel =  document.querySelector('.thirdWheel');
var multiplierSelect =  document.querySelector('#options');
var betNumber = document.querySelector('#optionsBet')
var playButton =  document.querySelector('#playButton');
var img = document.querySelector("#myImg");
var img2 = document.querySelector("#Img2");
var img3 = document.querySelector("#Img3");
const button = document.querySelector('button');

// #totalBalance is accesing the direct child of that elements that is why it's span is afeter totalBalance
// it's just like when you do the carrot(>) to the immediate child
var totalBalance= document.querySelector('#totalBalance span' );
// random number generator for randomizing the colors

function random(number) {

  return Math.floor(Math.random() * (number+1));
}
// researched on mdn for help with background
// onlick assign to  an annoymous function
button.onclick = function() {
  // storing the random function inside the const rdncol
  const randomcolors = 'rgb(' + random(259) + ',' + random(256) + ',' + random(255) + ')';
  document.body.style.backgroundColor = randomcolors;
}

// passing the function playstart as a callback
playButton.addEventListener('click',playstart);
let total=1000;
function playstart(){
  // setting the sources of my images in an array
  let items =["img/image.jpg","img/pic.jpg", "img/img3.jpg","img/img4.jpg", "img/img5.jpg"];

  // reducing the randomizer from -1 because the array starts at 0 because I don't want an out of bound error
  let first = items[randomizer()-1]
  let second = items[randomizer()-1]
  let third = items[randomizer()-1]
  // picking three random values in the array
  img.src=first;
  img2.src=second;
  img3.src=third;
  // checking if the value is less then 1 so the user doesn's keep owing money
  if (total<1){
    totalBalance.innerHTML="No, money";
  }
  // comparing the value within the javascript that is within the arrray
  else if(first===second && first === third &&  second=== third){
    // once the user win it will all the total by 10
    total= total + (parseInt(betNumber.value) * 10);
    totalBalance.innerHTML=total;
    console.log("inside if" + first)

  }

  else{
    // if not it'l reduce the amount
    total-=parseInt(betNumber.value) ;
    totalBalance.innerHTML=total;

  }
}

// specific random function for choices in the array. setting the random array from 1 to 5
function randomizer(){
  return Math.floor(Math.random()* 5)+1;
}


function play() {
       var audio = document.getElementById("audio");
       audio.play();
     }
