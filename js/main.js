document.querySelector('#bet').addEventListener('click', start)
let bank= 1000
function start (){
  let userChoice =  document.querySelector('#choose').value



  let array= [
    '<img src="images/icons8-air-jordan-150.png" alt="" id="jordan">',
    '<img src="images/icons8-nike-150.png" alt="" id="nike">',
    '<img src="images/icons8-adidas-trefoil-150.png" alt="" id="adidas">',
    '<img src="images/icons8-reebok-an-english-footwear-and-apparel-company-produces-and-distributes-sportswear-clothing-and-footwear-96.png" alt="" id="reebok">',
    '<img src="images/icons8-puma-a-german-multinational-company---designs-and-manufactures-athletic-and-casual-footwear,-apparel-and-accessories-96.png" alt=""> '
]
let image1 = array[Math.floor(Math.random() *5)]
let image2 = array[Math.floor(Math.random() *5)]
let image3 = array[Math.floor(Math.random() *5)]
document.querySelector('.images').innerHTML = image1 + image2 + image3

if(image1 === image2 && image2 === image3){
   //if user wins 
   //multiply what they bet by 10 
   // add the above amount to the bank
   //updat balance id witb bank amount
   bank=  bank + (userChoice *10)
   document.querySelector('#balance').innerHTML = bank
   alert('You Won!!')

}
else{
    //if user loses
    // subtract from bank what they bet
    //update balnce Id with bank
    bank = bank- userChoice
    document.querySelector('#balance').innerHTML = bank

}
}
