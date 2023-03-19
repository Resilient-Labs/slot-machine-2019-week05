let img = ["<img src ='img/brush.png'>" , "<img src ='img/hair.png'>" , "<img src ='img/heels.png'>" , "<img src= 'img/lipstick.png'>" , "<img src= 'img/palette.png'>"] 
let reel1 = document.getElementById('reel1'); 
let reel2 = document.getElementById('reel2');
let reel3 = document.getElementById('reel3');
let bal = 5000 
let bet; 


document.querySelector("#balance").innerText = bal; 

document.querySelector("#min").addEventListener("click", min) 
document.querySelector("#max").addEventListener("click", max)
function min () { 
	bet = 5
	document.querySelector("#bet").innerText = bet; 

}
function max () { 
	bet = bal 
	document.querySelector("#bet").innerText = bet; 

}
    
function spin () {
	let reel1Items = Math.floor(Math.random() * 5);
	let reel2Items = Math.floor(Math.random() * 5);
	let reel3Items = Math.floor(Math.random() * 5); 
     reel1.innerHTML = img[reel1Items]
     reel2.innerHTML = img[reel2Items]
     reel3.innerHTML = img[reel3Items] 
	if (bet === undefined)
	alert ("you must select bet") 
	 else if (reel1Items === reel2Items && reel1Items === reel3Items) {
		bal += bet 
		document.querySelector("#balance").innerText = bal; 
	}  
	else { bal -= bet; 
		document.querySelector("#balance").innerText = bal; 
		
	if(bal <=0){alert ("empty balance")}
	bal = 0; 
}
} 

    
   
   
	



