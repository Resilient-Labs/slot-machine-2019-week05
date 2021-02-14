let playerMoney = 1000
let balance = document.querySelector('#balance');


// Generate a random Number between 1 - 5
function numberGenerator(e) {
  // remove p tag
  if (document.querySelector('p')){
    document.querySelector('p').remove()
  }
  if (Number(balance.textContent) >= Number(document.querySelector('#money').value)) {
    let slot1 = Math.round(Math.random() * 5)
    document.querySelector('#slot1').innerText = slot1;

    let slot2 = Math.round(Math.random() * 5)
    document.querySelector('#slot2').innerText = slot2;

    let slot3 = Math.round(Math.random() * 5)
    document.querySelector('#slot3').innerText = slot3;
    if (slot1 === slot2 && slot2 === slot3 && slot1 === slot3) {
      //alert
      document.querySelector('#results').innerText = `You are a Winner! The divine energy of the universe is trying to tell you ${slot1} ${slot2} ${slot3} !`
      switch (slot1) {
        case 0:
        addElement('000 is a reminder that failure or heartbreak is not real, or at least not final. Endings are also always beginnings, as what you leave behind flows into what is ahead and creates something entirely different.')
        break;
        case 1:
          addElement('The angel number 111 signifies manifestation and prosperity. This number is a warning from the angels to pay attention to your thoughts because you will manifest into reality anything you think about continuously. They are reminding you to think only positive thoughts and release all negativity from your life.')
          break;
        case 2:
          addElement('The angel number 222 is an encouragement from your guardian angels to establish harmony and balance in all areas of your life. You need to remain faithful about the path you are following in this life. The angels are informing you that things will soon improve and that such situation will last for a long time. They are asking you not to waste your energy on negativity. This angel number is a reminder to keep following the path of your soul’s mission and purpose.')
          break;
        case 3:
          addElement('It is important to remember that this number is associated with the concept of Trinity, which is seen in many religious and spiritual systems as something divine and precious. In number 333, you have it multiplied. That explains why some people with this angel number have found their peace in divine love; meaning, they praise universal love above all, the love of God, the love of heavens and similar ideas. Number 333 gives people a lot of freedom in both deeds and thoughts.')
          break;
        case 4:
          addElement('Angel number 444 represents an amazing inner power. People with this angel number are responsible, honest and stable. They value tradition, family, follow rules and prove themselves loyal. They are intelligent and love to learn and develop. As an angelic message, this number makes a great foundation for connection with your guardians. It certainly assures you they are by your side.')
          break;
        case 5:
          addElement('Angel number 555 comes as an omen of change, but also as a reminder of your own wonderful capabilities. It comes to encourage you work on them and to learn how to properly handle this incredibly strong energy you have.')
          break;
        default:
          console.log(`You smell.`);
      }
      winMoney(e.target.value)
      //     console.log(balance)
      //     parseInt((balance.innerText) += 50);
      // }else{
      //       parseInt((balance.innerText) -= 5);
    } else {
      document.querySelector('#results').innerText = ""
      looseMoney(e.target.value)
    }
  }
}
function addElement (numberBlurb) {
  // create a new div element
  const newP = document.createElement("p");
  numberBlurb = document.createTextNode(numberBlurb)
  // add the text node to the newly created div
  newP.appendChild(numberBlurb);

  //  assigning the result element to a variable
  const currentSection = document.getElementById("results");
  // assinging the angelBackground to a variable parentSection
  const parentSection= document.querySelector('.angelBackground')
  // due to the nature of .insertBefore I  used the parent section of the  results  element to locate exactly where the newh2 tag should be inserterd.
  parentSection.insertBefore(newP, currentSection.nextSibling);
}

function winMoney(amount) {
  //playerMoney += 50
  playerMoney += (document.getElementById('money').value * 10)
  document.querySelector('#balance').innerHTML = playerMoney
}

function looseMoney(amount) {
  playerMoney -= document.getElementById('money').value
  //playerMoney -= 5

  document.querySelector('#balance').innerHTML = playerMoney
}


//Event listener for the clicks
document.querySelector('button').addEventListener('click', numberGenerator)
// Betting range for the user

// Keep track on the balance of the user and once it reaches 0, its game Over
