/* what is the algorithm problem in your own Words
- write a function which reads a string and compared itself forward and backwards (Palindrome)
- returns true if the string is the same forwards and backward and returns false if it isn't
*/

function isPalindrome(word) {
  // Write your algorithm here
  //1 convert the string to array
  const wordArr = Array.from(word)
  console.log("wordArr:", wordArr)
  // 2 reverse array
  const reversed = wordArr.reverse()
  // 3 convert back to string
  const backwards = reversed.join('')
  // 4 compare reverse string to the original string
  // 5 return a boolean of the comparison
  return word = backwards
}

/* 
  Add your pseudocode here
  1- convert the string to array
  2- reverse array
  3- convert back to string
  4- compare reverse string to the original string
  5- return a boolean of the comparison
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


// run     node index.js   in terminal to test
// solution above might not be complete