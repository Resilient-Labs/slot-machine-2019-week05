var startingBalance = 1000;
var currentBalance;
var finalBalance;
var slotSelect = ["bk.png","mcdonalds.png","pizzahut.jpg","chickFila.png","chipotle.png"]
const bet = parseInt(document.querySelector("#bet-input").value)


document.querySelector(".go").addEventListener("click", onClick )
function onClick(){

   slotimg1 = getRandomSlotItem()


   function getRandomSlotItem(){
     var itemSelected= Math.floor(Math.random()*5)
     var itemSelected2= Math.floor(Math.random()*5)
     var itemSelected3= Math.floor(Math.random()*5)



  document.getElementById("slotimg1").src = slotSelect[itemSelected]
  document.getElementById("slotimg2").src = slotSelect[itemSelected2]
  document.getElementById("slotimg3").src = slotSelect[itemSelected3]
  const bet = parseInt(document.querySelector("#bet-input").value)
  console.log(`bet is ${bet}`)



  if ((itemSelected === itemSelected2) && (itemSelected === itemSelected3))
  {

     currentBalance = parseInt(document.querySelector(".update").innerHTML)
     console.log(currentBalance)
     currentBalance = currentBalance + (10 * bet)
     console.log(currentBalance);
     document.querySelector(".update").innerHTML = currentBalance
     console.log('Winner')
   }

   else{
      currentBalance = parseInt(document.querySelector(".update").innerHTML)
      console.log(currentBalance)
      currentBalance = currentBalance - bet
      console.log(currentBalance);
      document.querySelector(".update").innerHTML = currentBalance
      console.log('try again')
    }
}
}
