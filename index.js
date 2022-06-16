function isPalindrome(word) {
  // Write your algorithm here
  // iterate to the middle
  for(i=0; i<word.length /2 ; i++){
    const j = word.length -1 -i
   /* const startChar= word[i]
    const endChar= word[j]
    if (startChar!==endChar) return false
    else return true */

 if (word[i] !== word[j]) return false
 
 else return true
}
}

/* 
  Add your pseudocode here
  make a fxn that returns true if the reversed word is same as input word

  iterate from the begining to the middle 
  compare the first letter to the corresponding last letter

  if letters dont match return false 
  
  else return true
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

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));
}

module.exports = isPalindrome;
