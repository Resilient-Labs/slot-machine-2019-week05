
function bet25(){
    let bet25 = 25;
    let userAmount = document.getElementById('total').innerText;
    let total = userAmount - bet25;
    document.getElementById('total').innerText = total;
    
}
function bet50(){
    let bet50 = 50;
    let userAmount = document.getElementById('total').innerText;
    let total = userAmount - bet50;
    document.getElementById('total').innerText = total;
}
function bet75(){
    let bet75 = 75;
    let userAmount = document.getElementById('total').innerText;
    let total = userAmount - bet75;
    document.getElementById('total').innerText = total;
}
function randomizeImages(){
    const images = [
        'cherry.png',
        'cherry.png',
        'cherry.png',
        'cherry.png',
        'cherry.png',
        'cherry.png',
        'seven.png',
        'seven.png',
        'seven.png',
        'bell.png',
        'bell.png',
    ]
    shuffle (images)
    console.log (images)
    const pageImages = document.getElementsByClassName('img')
    console.log(pageImages)
    for(let i = 0; i < 3; i++){
        console.log(i, images[i])
        pageImages[i].src = images[i]
    }
}
randomizeImages()
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
