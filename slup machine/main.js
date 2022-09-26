let button=document.querySelectorAll('button')
let money=document.querySelector('.money')
money.innerText=1500
let game=document.querySelectorAll('.square')
let win=document.querySelector('.winner')
let numbers=[1,2,3,4]
for( let i=0; i<button.length; i++){
    button[i].addEventListener('click',playGame)
}
function playGame(e){
    let bet=e.target.innerText
    if(money.innerText-bet<0){
        win.innerText='Sorry, you are out of money.'
        return
    }
    else{
        for( let i=0; i<game.length; i++){
            game[i].innerText=numbers[Math.floor(Math.random()*3)]
        }
    if(game[0].innerText===game[1].innerText&& game[1].innerText===game[2].innerText){
        console.log(Number(money.innerText))
        console.log(bet)
        money.innerText= Number(money.innerText)+ Number(bet)
        win.innerText='YOU WON!!!🎉'
    }
    else{
        money.innerText= Number(money.innerText)- Number(bet)
        win.innerText='YOU LOST.😔'
    }

    }
}
//