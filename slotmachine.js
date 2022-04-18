function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function getElement(id) {
  return document.getElementById(id);
}

function spin() {
  const item1 = getElement('item1');
  const item2 = getElement('item2');
  const item3 = getElement('item3');
  const item4 = getElement('item4');
  const item5 = getElement('item5');

  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const num3 = getRandomNumber();
  const num4 = getRandomNumber();
  const num5 = getRandomNumber();

  item1.innerHTML = `${num1}`; 
  item2.innerHTML = `${num2}`;
  item3.innerHTML = `${num3}`;
  item4.innerHTML = `${num4}`;
  item5.innerHTML = `${num5}`;
}


document.querySelector(".btn").addEventListener("click", spin)
  
  

  // when all numbes are equal then remove hidden 





  // make a coin system with a min and max bet


