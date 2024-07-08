/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



class Phrase {
    constructor(phrase) {
      // Initialize the phrase property and convert it to lowercase
      this.phrase = phrase.toLowerCase();
    }
  
    addPhraseToDisplay() {
      // Select the ul element where the phrase will be displayed
      const phraseDiv = document.querySelector('#phrase ul');
      let html = '';
      // Iterate through each character in the phrase
      for (let i = 0; i < this.phrase.length; i++) {
        // Check if the character is a space
        if (this.phrase[i] === ' ') {
          // Add a space list item with class 'space'
          html += `<li class="space"> </li>`;
        } else {
          // Add a letter list item with classes 'hide', 'letter', and the specific letter class
          html += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
        }
      }
      // Set the innerHTML of the ul element to the generated HTML
      phraseDiv.innerHTML = html;
    }
  
    checkLetter(letter) {
      // Check if the phrase includes the selected letter
      return this.phrase.includes(letter);
    }
  
    showMatchedLetter(letter) {
      // Select all elements with the specified letter class that are hidden
      const matchedLetters = document.querySelectorAll(`.letter.${letter}`);
      // Iterate through each matched element
      matchedLetters.forEach(letterElement => {
        // Remove the hide class and add the show class to reveal the letter
        letterElement.classList.remove('hide');
        letterElement.classList.add('show');
      });
    }
  }
  