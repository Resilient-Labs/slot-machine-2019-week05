/*

-initialize an money amount for the user on page load like 5k
-min bet is 100 dollars max bet will be 1000
 have a button for each bet amount
    will be hooked up to  a bet function if needed

need to make a lever function

*/

document.querySelector('#minBet').addEventListener('click', minbet)
document.querySelector('#maxBet').addEventListener('click', maxbet)

//base money amount
let moneyToBet = 5000
bank.innerText = moneyToBet

function minbet() {
    moneyToBet -= 100
    bank.innerText = moneyToBet
    let rollOne = Math.floor(Math.random() * 2)
    let rollTwo = Math.floor(Math.random() * 2)
    let rollThree = Math.floor(Math.random() * 2)

    // console.log(rollOne);
    // console.log(rollTwo);
    // console.log(rollThree);

    placeToSee1.innerText = rollOne
    placeToSee2.innerText = rollTwo
    placeToSee3.innerText = rollThree


    if (rollOne === 0 && rollTwo === 0 && rollThree === 0) {
        moneyToBet = 0
        bank.innerText = moneyToBet
        report.innerText = "YOU GET NOTHING!!!"
        return
    }

    if (rollOne === rollTwo && rollOne === rollThree) {

        if (bank.innerText === 0) {
            bank.innerText === (rollOne * rollTwo * rollThree)
            return
        }

        moneyToBet *= (rollOne + rollTwo + rollThree)
        bank.innerText = moneyToBet
        report.innerText = "Lucky, why not roll again >;}"
    }



}


function maxbet() {
    moneyToBet -= 1000
    bank.innerText = moneyToBet
    let rollOne = Math.floor(Math.random() * 5)
    let rollTwo = Math.floor(Math.random() * 5)
    let rollThree = Math.floor(Math.random() * 5)

    console.log(rollOne);
    console.log(rollTwo);
    console.log(rollThree);

    placeToSee1.innerText = rollOne
    placeToSee2.innerText = rollTwo
    placeToSee3.innerText = rollThree


    if (rollOne === 0 && rollTwo === 0 && rollThree === 0) {

        moneyToBet = 0
        bank.innerText = moneyToBet
        report.innerText = "YOU GET NOTHING!!!"
        return
    }

    if (rollOne === rollTwo && rollOne === rollThree) {

        if (bank.innerText === 0) {
            bank.innerText === (rollOne * rollTwo * rollThree)

        }

        moneyToBet *= (rollOne + rollTwo + rollThree)
        bank.innerText = moneyToBet
        report.innerText = "Lucky, why not roll again >;}"
    }



}
