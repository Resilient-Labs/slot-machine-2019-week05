let textCredits = document.getElementById("textCredits");
let totCredits = 1000;

//animation

let myImageL = document.querySelector('#face-0');
let myImageM = document.querySelector('#face-1');
let myImageR = document.querySelector('#face-2');

let imageArrayL = ['../imgs/got-1.png','../imgs/got-4.png','../imgs/got-2.png','../imgs/got-3.png','../imgs/got-5.png'];
let imageArrayM = ['../imgs/got-3.png','../imgs/got-2.png','../imgs/got-1.png','../imgs/got-5.png','../imgs/got-4.png'];
let imageArrayR = ['../imgs/got-5.png','../imgs/got-1.png','../imgs/got-3.png','../imgs/got-4.png','../imgs/got-2.png'];

let imageIndexL = 0; 
let imageIndexM = 0; 
let imageIndexR = 0; 

function changeImageL() {
    myImageL.setAttribute("src",imageArrayL[imageIndexL]);
    imageIndexL = (imageIndexL + 1) % imageArrayL.length;
    
    myImageM.setAttribute("src",imageArrayM[imageIndexM]);
    imageIndexM = (imageIndexM + 1) % imageArrayM.length;
    
    myImageR.setAttribute("src",imageArrayR[imageIndexR]);
    imageIndexR = (imageIndexR + 1) % imageArrayR.length;
    
    
    }   

// animation ends

const startBtn = document.querySelector('.btn-roll');
const stopBtn = document.querySelector('.btn-stop');
let title = document.querySelector('.title');



startBtn.addEventListener('click', () => {
    anim = setInterval(changeImageL, 300);
    startBtn.disabled = true;
		stopBtn.disabled = false;
    title.textContent ='GoT Slots';
    
    title.classList.remove('youwon'); 
    title.classList.remove('tryagain'); 


});

stopBtn.addEventListener('click',() => {
        
        clearInterval(anim);
        startBtn.disabled = false;
        stopBtn.disabled = true;


        let diceL = Math.floor(Math.random() * 3);
        // console.log('L' + diceL);
         let leftDOM = document.querySelector('#face-0');
         leftDOM.style.display= 'float';
         leftDOM.src = './imgs/got-' + diceL + '.png';

         let diceM =  Math.floor(Math.random() * 3);
         // console.log('M' + diceM)
          let midDOM =document.querySelector('#face-1');
          midDOM.style.display= 'float';
          midDOM.src = './imgs/got-' + diceM + '.png';

          let diceR = Math.floor(Math.random() * 3); 
          // console.log('R'+ diceR) ;
           let rightDOM =document.querySelector('#face-2');
           rightDOM.style.display = 'float';
           rightDOM.src = './imgs/got-' + diceR + '.png';
           

        // winner 
        let title = document.querySelector('.title');
        title.classList.remove('blinking'); 
  

        if (diceL== 0  && leftDOM.src == midDOM.src &&  midDOM.src == rightDOM.src ) {

          title.textContent ='you won!' ;
          title.classList.add('youwon');
          manageCredits(true);
           

        }  else if (diceL== 2  && leftDOM.src == midDOM.src &&  midDOM.src == rightDOM.src ) {
      
            title.textContent ='you won!';
            title.classList.add('youwon');
            manageCredits(true);

            
        } else if (diceL== 1  && leftDOM.src == midDOM.src &&  midDOM.src == rightDOM.src ) {
          
           title.textContent =' you won!';
           title.classList.add('youwon');
           manageCredits(true);
          
        } else  { 
           title.textContent ='keep trying' ;   title.classList.add('tryagain'); 
           manageCredits(false);
        }
	
	
		
        
      });

function manageCredits(x){
  let credits =  document.getElementById("credits").value;
  if(x){
    totCredits += credits*1;
    textCredits.innerHTML = totCredits;
  }
  else{
    totCredits -= credits;
    textCredits.innerHTML = totCredits;
  }
}

