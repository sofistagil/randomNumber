//Get HTML elements
const result = document.getElementById('result');
const btn = document.getElementById('btn'); 
const randomNumber = Math.floor(Math.random() * 25) + 1;  //Generate a random number between 0 and 25 
let attempts = 5; //Set number of attempts allowed

//Add an event listener
btn.addEventListener( 'click', function() {
  // Get the user's guess from the input field
     const userInputF = document.getElementById('userInput');
     const userGuess = parseInt(userInputF.value);
  
   //Check if user enters a number that matches the random number
    if (userGuess >= 1 && userGuess <= 25) {
          if (userGuess === randomNumber) { //matches the generated random number
              result.innerHTML = `Congratulations! You guessed the number right!`;
              result.style.cssText = `background-color: green; color: white; padding: 10px`;
          } else if (userGuess > randomNumber) { //Greater than generated random number
              attempts--;
              result.innerHTML = `Wrong! That's too high. Try again! <br> You have ${attempts} attempts remaining.`;
              result.style.cssText = `background-color: darkred; color: white; padding: 10px`;
          } else if (userGuess < randomNumber) {  //Less than generated random number
              attempts--;
              result.innerHTML = `Wrong! That's too low. Try again! <br> You have ${attempts} attempts remaining.`;
              result.style.cssText = `background-color: darkred; color: white; padding: 10px`;
          }
      } else {  //Invalid input
          result.innerHTML = "Invalid input. Please enter a number between 1 and 25.";
          result.style.cssText = `background-color: yellow; color: black; padding: 10px; `;
      }

    //Check if the player runs out of attempts
    if (attempts === 0) {
          result.innerHTML = `GAME OVER! The number was ${randomNumber}.`;
          result.style.cssText = `font-weight: bold; color: darkred; padding: 10px; font-size: 25px; `;
          document.getElementsByTagName('button')[0].disabled = true; // Disable the guess button
          userInputF.disabled = true; // Disable the input field


          //js for guessing number game also below this comment there is some extra code for when putting everything together in only one file:
          

          <link href="style.css" rel="stylesheet" />


<script src="script.js" />

