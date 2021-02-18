# 🎰 Week05 Bootcamp2019 Project: Slot Machine

Ori is traveling through the galaxy to see their friends. They are on their way to the Andromeda Galaxy but is running low on fuel. The ship runs on stars. Through the slot machine game, help Ori earn stars to fuel their journey. In order to win stars, the planets must align in threes. 

Link to Project: https://align-planets.netlify.app/

![Project Image](/pic/slot.png)


### How It's Made:

Tech used: HTML, CSS, JavaScript

This slot machine game uses 5 unique images. The user must get 3 of the same image in order to win stars. In order to organize and randomize the images that become the output, I used an array and the Math.floor() and Math.random() methods. 

### Lesson Learned

I learned to be mindful of edge cases and unintended effects that can be a result of my code. For example, in the form's input, the user is able to press the 'Enter key.' If they do this, the page will refresh. I did not want this to happen. Rather, when the 'Enter' key is pressed, I wanted the game function to run using the input that the user specified. In order to do this, I used the preventDefault() method and called the function that performs the game. 

