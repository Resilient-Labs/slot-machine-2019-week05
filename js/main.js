//Create three boxes in your HTML / CSS
//Click on a box and have it rotate (45+ degrees each click)
//On the third click of each box change the color of the other two boxes
//On a click of a box, turn that box into a circle and have it move to the right
//Pseudo Code and Wireframes: Build a simple slot machine with minimum 5 items per reel and 3 reels - user should be able to bet min or max and have their total update aka how much money they have won or lost. Min bet does $5 and Max bet does $50. They should start with $1000. Matches of the three wheels = a win just like a normal slot machine and they win 10x their bet



// min 5 usd
// max bet 50 usd
const topBox = document.querySelector('#boxTop')
const middle = document.querySelector('#boxMiddle')
const button = document.querySelector('#boxButton')
let clicksTop = 0
let degNumber = 0
let clicksMiddle =0
let clicksButton =0

document.querySelectorAll('div').forEach(element => 
    element.addEventListener('click', count => {
       
        if(count.target.id === "boxTop" ){
            rotate()
            clicksTop ++
            if(clicksTop === 3){
                clicksTop = 0
                middle.style.background = 'black'
                button.style.background = 'blue'
                topBox.style.background = 'white'
            }
        }else if(count.target.id === "boxMiddle"){
            clicksMiddle++
            if(clicksMiddle === 3){
                clicksMiddle = 0
                topBox.style.background = 'black'
                button.style.background = 'blue'
                middle.style.background = 'white'
            }
           
        }else if(count.target.id === "boxButton"){
            circle()
            clicksButton++
            if(clicksButton=== 3){
                clicksButton = 0
                topBox.style.background = 'black'
                middle.style.background = 'blue'
                button.style.background = 'white'
            }
          
        }
    })
)


function rotate(){
    degNumber += 45
    topBox.style.transform=`rotate(${degNumber}deg)` 
}

function circle(){
    button.style.left = "50%"
    button.style.borderRadius = '50%'
}




