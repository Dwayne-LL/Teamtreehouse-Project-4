/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


// Function to reset the gameboard
function resetGameboard() {
    // Remove all li elements from the Phrase ul element
    const phraseUl = document.querySelector('#phrase ul');
    phraseUl.innerHTML = '';
  
    // Enable all onscreen keyboard buttons and update each to use the key CSS class
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => {
      key.disabled = false;
      key.classList.remove('chosen', 'wrong');
      key.classList.add('key');
    });
  
    // Reset all heart images to liveHeart.png
    const hearts = document.querySelectorAll('.tries img');
    hearts.forEach(heart => {
      heart.src = 'images/liveHeart.png';
    });
  }
  
  // Event listener for the Start Game button
  document.getElementById('btn__reset').addEventListener('click', () => {
    // Reset the gameboard
    resetGameboard();
  
    // Create a new Game object
    game = new Game();
  
    // Start the game
    game.startGame();
  });
  
  // Event listener for onscreen keyboard buttons using event delegation
  const keyboard = document.getElementById('qwerty');
  keyboard.addEventListener('click', event => {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
      // Call handleInteraction on the game object with the clicked button
      game.handleInteraction(event.target);
    }
  });
  

  
