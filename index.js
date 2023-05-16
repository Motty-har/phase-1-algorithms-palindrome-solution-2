function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++){
      const j = word.length - 1 - i;
      if(word[i] !== word[j]){
        return false
      }
  }
  return true
}
  /*Add your pseudocode here
    ieterate through the string from begining untill the middle
     compare what we iterate through with the letter at the end of 
     the string
     if letters dont match return false
     if we reach the middle and all letters match return true 

*/


/* 
 
  

  // Write your algorithm here
  we need to make a function that recieves a string as an argument 
  and compares the first letter and last letter to see if thei matching.
  if each of the corresponding letters match untill they meet up on the 
  middle then will return true, if not will return false.
  */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
