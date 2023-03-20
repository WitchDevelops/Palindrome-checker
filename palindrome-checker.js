// remove all non-alphanumeric chars, turn into the same case
// reverse the string
// compare with the original one

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function palindrome() {
  //grab user input from the text field
  let userInput = document.getElementById("user-input").value;
  //change it to upper case
  let word1 = userInput.toUpperCase();
  //declare regex to remove nonalphanumeric characters
  let removeNonANumRegex = /[A-Z0-9]/g;
  //remove spaces and special characters and assign the result to a new variable
  let word1Removed = word1.match(removeNonANumRegex).join("");
  
  console.log(word1Removed);

  //reverse this word
  let word2Reversed = reverseString(word1Removed);

  console.log(word2Reversed);

  //assign the p tag for the answer
  let result = document.getElementById("answer");

  //if/else block
  if (word1Removed == word2Reversed) {
    result.innerHTML = `Correct! ${userInput} is a palindrome!`;
    return true;
  } else {
    result.innerHTML = `Sorry, ${userInput} is not a palindrome.`;
    return false;
  }
}

// let checkString = "_kayak"
// let result = palindrome(checkString);

// console.log(`Is ${checkString} a palindrome? ${result}`);