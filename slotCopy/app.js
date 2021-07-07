// build 3 reels with 5 items in each
// min and max bet with update of current amount won or lost
// min is $5 and max is $50, start at $1000
// match of all 3 wins 10x the Bet
let options = ["", "", "", "", ""]
let pics = document.getElementById("reelOneItem").innerHTML
document.getElementById('spin').onclick = spin
let current = document.getElementById('money').innerHTML = 1000

// function getPics {
//   return
// }

function spin() {

  let selectbet = document.getElementById("bet").value;


  let val = Math.random();
  if (val < 0.2) {
    document.getElementById("reelOneItem").innerHTML = options[0];
    var img = document.createElement("img");
    img.src = "cherry.jpg";
    var src = document.getElementById("reelOneItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(val < 0.4){
    document.getElementById("reelOneItem").innerHTML = options[1]
    var img = document.createElement("img");
    img.src = "seven.jpg";
    var src = document.getElementById("reelOneItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(val < 0.6){
    document.getElementById("reelOneItem").innerHTML = options[2]
    var img = document.createElement("img");
    img.src = "grape.jpg";
    var src = document.getElementById("reelOneItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(val < 0.8){
    document.getElementById("reelOneItem").innerHTML = options[3]
    var img = document.createElement("img");
    img.src = "bell.jpg";
    var src = document.getElementById("reelOneItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else {
    document.getElementById("reelOneItem").innerHTML = options[4]
    var img = document.createElement("img");
    img.src = "bar.jpg";
    var src = document.getElementById("reelOneItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  }


  let valTwo = Math.random();
  if (valTwo < 0.2) {
    document.getElementById("reelTwoItem").innerHTML = options[0]
    var img = document.createElement("img");
    img.src = "cherry.jpg";
    var src = document.getElementById("reelTwoItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(valTwo < 0.4){
    document.getElementById("reelTwoItem").innerHTML = options[1]
    var img = document.createElement("img");
    img.src = "seven.jpg";
    var src = document.getElementById("reelTwoItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(valTwo < 0.6){
    document.getElementById("reelTwoItem").innerHTML = options[2]
    var img = document.createElement("img");
    img.src = "grape.jpg";
    var src = document.getElementById("reelTwoItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(valTwo < 0.8){
    document.getElementById("reelTwoItem").innerHTML = options[3]
    var img = document.createElement("img");
    img.src = "bell.jpg";
    var src = document.getElementById("reelTwoItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else {
    document.getElementById("reelTwoItem").innerHTML = options[4]
    var img = document.createElement("img");
    img.src = "bar.jpg";
    var src = document.getElementById("reelTwoItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  }

  let valThree = Math.random();
  if (valThree < 0.2) {
    document.getElementById("reelThreeItem").innerHTML = options[0]
    var img = document.createElement("img");
    img.src = "cherry.jpg";
    var src = document.getElementById("reelThreeItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(valThree < 0.4){
    document.getElementById("reelThreeItem").innerHTML = options[1]
    var img = document.createElement("img");
    img.src = "seven.jpg";
    var src = document.getElementById("reelThreeItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(valThree < 0.6){
    document.getElementById("reelThreeItem").innerHTML = options[2]
    var img = document.createElement("img");
    img.src = "grape.jpg";
    var src = document.getElementById("reelThreeItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else if(valThree < 0.8){
    document.getElementById("reelThreeItem").innerHTML = options[3]
    var img = document.createElement("img");
    img.src = "bell.jpg";
    var src = document.getElementById("reelThreeItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  } else {
    document.getElementById("reelThreeItem").innerHTML = options[4]
    var img = document.createElement("img");
    img.src = "bar.jpg";
    var src = document.getElementById("reelThreeItem");
    src.appendChild(img);
    img.style.height = "150px"
    img.style.width = "200px"
  }

  let itemOne = document.getElementById("reelOneItem").innerHTML;
  let itemTwo = document.getElementById("reelTwoItem").innerHTML;
  let itemThree = document.getElementById("reelThreeItem").innerHTML;
  console.log(itemOne);
  console.log(itemTwo);
  console.log(itemThree);

    if (selectbet == "five") {
      if (itemOne == itemTwo && itemTwo == itemThree) {
        document.getElementById("money").innerHTML = current+=45
        alert("You win!!!!")
      } else {
        document.getElementById("money").innerHTML = current-=5
      }
    }


    if (selectbet == "fifty") {
      if (itemOne == itemTwo && itemTwo == itemThree) {
        document.getElementById("money").innerHTML = current+=450
        alert("You win!!!!")
      } else {
      document.getElementById("money").innerHTML = current-=50
      }
    }
  }
