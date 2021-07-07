// Trek and Anthony direct me

// declaring variables to grab the ids and li elements
var todoList = document.querySelector("#todoList");
var inputField=document.querySelector("#inputField");
var addTolist = document.querySelector("#addTolist");
var clearComplete= document.querySelector("#clearComplete");
var clearAll = document.querySelector("#clearAll");
var listItems= document.querySelectorAll('li');

addTolist.addEventListener('click',function () {
  var li = document.createElement("li");
  // storing the the inputvalues inside the strikeElements
  var strikeElement=inputField.value;
  li.innerHTML=inputField.value;
  todoList.appendChild(li);
  li.addEventListener('click',function(){
  li.innerHTML=strikeElement.strike();

  })
})
// creating addEventListener for when the user select the strikes for deletions
clearComplete.addEventListener('click',function(){
  var listItemsStrike = document.querySelectorAll('li');
  for(var i=0; i<listItemsStrike.length;i++){
    var li = listItemsStrike[i];
// checking is there are any list inside the doms that contains a strike for deletions
    if(li.querySelector('strike') ){
      // once the conditions is met then remove all selected
      todoList.removeChild(li);

    }
  }
})


// creating an event listener for when the user wants to clearalll of the list this function trigger
// passing the function as a callback
clearAll.addEventListener('click',function(){
// creating variable to hold the list elemenents
  var listItemsStrike = document.querySelectorAll('li');
  // looping through the list
  for(var i=0; i<listItemsStrike.length;i++){
    // storing the list elements inside the li variable
    var li = listItemsStrike[i];
   // checking if list is not equal zero
    if(li.querySelector('ul')!==0 ){
      // removing all ul child by calling the function remove child and passing li as an argument
      todoList.removeChild(li);

    }
  }
})
