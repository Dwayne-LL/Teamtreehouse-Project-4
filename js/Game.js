/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game {
    constructor() {
      this.missed = 0;
      this.phrases = [
        new Phrase('Winter is coming'),
        new Phrase('You know nothing Jon Snow'),
        new Phrase('The North remembers'),
        new Phrase('The night is dark and full of terrors'),
        new Phrase('Hold the door')
      ];
      this.activePhrase = null;
    }
  
    startGame() {
      // Hide the start screen overlay
      const overlay = document.querySelector('#overlay');
      overlay.style.display = 'none';
  
      // Get a random phrase and set it as the active phrase
      this.activePhrase = this.getRandomPhrase();
  
      // Display the active phrase on the board
      this.activePhrase.addPhraseToDisplay();
    }
  
    getRandomPhrase() {
      // Generate a random index to select a phrase from this.phrases
      const randomIndex = Math.floor(Math.random() * this.phrases.length);
      return this.phrases[randomIndex];
    }
  
    handleInteraction(button) {
      // Disable the selected letter’s onscreen keyboard button
      button.disabled = true;
  
      // Get the letter from the button text content
      const letter = button.textContent;
  
      // Check if the letter is in the active phrase
      if (this.activePhrase.checkLetter(letter)) {
        // Add 'chosen' class to the button and show matched letter
        button.classList.add('chosen');
        this.activePhrase.showMatchedLetter(letter);
        
        // Check if the player has won
        if (this.checkForWin()) {
          this.gameOver(true); // true for win
        }
      } else {
        // Add 'wrong' class to the button, remove a life
        button.classList.add('wrong');
        this.removeLife();
      }
    }
  
    removeLife() {
      // Increment missed counter
      this.missed++;
  
      // Select heart images and replace one with lostHeart.png
      const hearts = document.querySelectorAll('.tries img');
      hearts[this.missed - 1].src = 'images/lostHeart.png';
  
      // Check if player has lost all lives
      if (this.missed === 5) {
        this.gameOver(false); // false for loss
      }
    }
  
    checkForWin() {
      // Check if there are any letters still hidden
      const hiddenLetters = document.querySelectorAll('.letter.hide');
      return hiddenLetters.length === 0;
    }
  
    gameOver(win) {
      // Display the start screen overlay
      const overlay = document.querySelector('#overlay');
      overlay.style.display = 'flex';
  
      // Get the game over message element
      const gameOverMessage = document.querySelector('#game-over-message');
  
      // Update the game over message based on win/loss
      if (win) {
        overlay.className = 'win';
        gameOverMessage.textContent = 'Congratulations! You won!';
      } else {
        overlay.className = 'lose';
        gameOverMessage.textContent = 'Sorry, better luck next time!';
      }
    }
  }
  