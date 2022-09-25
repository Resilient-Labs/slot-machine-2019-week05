//
document.querySelector('#spin').addEventListener('click', spin)

//
function getRandomNumber (){
    let number = Math.ceil(Math.random()* 5 );
    if (number === 1){
        return '👞'
    }else if (number === 2){
        return '🛍️'
    }else if (number === 3){
        return '💄'
    }else if (number === 4){
        return '👙'
    }else if (number === 5){
        return '👟'
    }
}

//

function spin (){
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

//
if (num1 === num2 && num1 === num3){
    console.log('You won!')
    document.getElementById('response').innerHTML = `You won!`
}
//
else {
    document.getElementById('response').innerHTML = 'You lost..'
    console.log('You lost..')
}
//
    document.getElementById('item1').innerHTML = num1;
    document.getElementById('item2').innerHTML = num2;
    document.getElementById('item3').innerHTML = num3;
}

// 