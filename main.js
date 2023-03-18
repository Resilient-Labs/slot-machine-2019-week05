//button to spin
//icons will randomly spin (3x)

let total = 1000;

// let img1 = new Image();
// img1.src = "ayaka.jpg";
// let img2 = new Image();
// img2.src = "Cyno.jpg";
// let img3 = new Image();
// img3.src = "diluc.jpg";
// let img4 = new Image();
// img4.src = "Mona.jpg";
// let img5 = new Image();
// img5.src = "ganyu.jpg";

// gatcha.push(img1);
// gatcha.push(img2);
// gatcha.push(img3);
// gatcha.push(img4);
// gatcha.push(img5);

let gatcha = [
  '<img src="img/ayaka.jpg"></img>',
  '<img src="img/Cyno.jpg"></img>',
  '<img src="img/diluc.jpg"></img>',
  '<img src="img/ganyu.jpg"></img>',
  '<img src="img/Mona.jpg"></img>',
];

document.querySelector("#min").addEventListener("click", spinWheel10);
document.querySelector("#max").addEventListener("click", spinWheel25);

let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

function spinWheel10() {
  let boxOne = gatcha[Math.floor(Math.random() * 5)];
  let boxTwo = gatcha[Math.floor(Math.random() * 5)];
  let boxThree = gatcha[Math.floor(Math.random() * 5)];

  img1.innerHTML = boxOne;
  img2.innerHTML = boxTwo;
  img3.innerHTML = boxThree;

  if (boxOne === boxTwo && boxTwo === boxThree) {
    total += 20;
    document.querySelector("h3").innerText = "...Pull for me, please";
  } else {
    total -= 10;
    document.querySelector("h3").innerText =
      "You look like you would lose 50/50s";
  }
  document.querySelector("#total").innerText = total;

  if (total <= 0) {
    alert("You have a Gambling Addiction, seek Therapy");
    total = 1000;
    document.querySelector("#total").innerText = total;
  }
}

function spinWheel25() {
  let boxOne = gatcha[Math.floor(Math.random() * 5)];
  let boxTwo = gatcha[Math.floor(Math.random() * 5)];
  let boxThree = gatcha[Math.floor(Math.random() * 5)];

  img1.innerHTML = boxOne;
  img2.innerHTML = boxTwo;
  img3.innerHTML = boxThree;

  if (boxOne === boxTwo && boxTwo === boxThree) {
    total += 50;
    document.querySelector("h3").innerText = "...Pull for me, please";
  } else {
    total -= 25;
    document.querySelector("h3").innerText =
      "You look like you would lose 50/50s";
  }
  document.querySelector("#total").innerText = total;
  if (total <= 0) {
    alert("You have a Gambling Addiction, seek Therapy");
    total = 1000;
    document.querySelector("#total").innerText = total;
  }
}
