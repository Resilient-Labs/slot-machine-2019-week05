# 🎰 Week05 Project: Slot Machine

This is a slot machine with 5 items. If the user gets 3 matching items, they will win money. If not, they can continue betting.

Check out the live project: https://kittenmachine.netlify.app/


## How it's made

Tech used: HTML, CSS, JavaScript

I created two buttons for the low bet and high bet. These buttons have event listeners. Each event listener will run a function to randomize through the five items and if all three items match, the user will win either $50 or $100. To randomize the items, I first put all 5 images in an array. I used the Math.floor(Math.random()) to shuffle through the 5 images. I created a conditional that if 3 images match, they win 50 or 100.

## Lessons learned
I had a bug that took me 3 hours to solve. The math wouldn't update when the 3 reels matched. I later found out that it wasn't the math code that was incorrect, but I wasn't targetting the element class properly with document.querySelector since it was localized to one function. I had to change its scope to global. I was happy to learn first hand how local and global scopes affect your code.
