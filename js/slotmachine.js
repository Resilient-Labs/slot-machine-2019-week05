
let playerMoney = 1000;

document.querySelectorAll(".playButton").forEach((el) => {
  el.addEventListener("click", () => {

    let bet,
        reelValues = [0, 0, 0];


    bet = event.target.id === "betMin" ? 5 : 50;


    playerMoney -= bet;

    document.querySelectorAll(".reel").forEach((el, index) => {
      let reelPick = Math.floor(Math.random() * 5);

      reelValues[index] = reelPick;

      switch(reelPick) {
        case 0:
          el.style.backgroundImage = 'url("stylesheet/img/lbj.jpg")';


          break;
        case 1:
          el.style.backgroundImage = 'url("stylesheet/img/mj.jpg")';


          break;
        case 2:
          el.style.backgroundImage = 'url("stylesheet/img/kobe.jpg")';

          break;
        case 3:
          el.style.backgroundImage = 'url("stylesheet/img/wilt.jpg")';


          break;
        case 4:
          el.style.backgroundImage = 'url("stylesheet/img/iverson.jpg")';


          break;
        default:
          alert("ERROR!");
          playerMoney += bet;
          return;
      }
    })
    if(reelValues[0] === reelValues[1] && reelValues[1] === reelValues[2]) {
      playerMoney += bet * 10;
      alert("WINNER")
    }

    document.querySelector("#playerMoney").innerHTML = `Player Money: \$${playerMoney}`;

  });
});
