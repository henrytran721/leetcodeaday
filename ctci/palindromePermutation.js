// determine whether the string forms a palindrome when rearranging the characters
// palindrome is a word that reads the same forward and backward
// Taco Cat
// Tact Coa

function palindromePermutation(s) {
    if(s.length <= 1) return true;
    let map = {};
    // sanitize string
    s = s.toLowerCase().split(' ').join('');
    for(let letter of s) {
      map[letter] > 0 ? map[letter]++ : map[letter] = 1;
    }
  
    let counter = 0;
    for(let key in map) {
      if(map[key] % 2 === 1) {
        counter++;
      }
      if(counter > 1) return false;
    }
  
    return true;
  }
  
  
  console.log(palindromePermutation("Tact Coa"));