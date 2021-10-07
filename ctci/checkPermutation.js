/**
 * Given two strings, write a method to decide if one is a permutation of the other
 */

function permutations(s1, s2) {
// base case
if(s1.length !== s2.length) return false;

// sort time O(n log n) space O(1) 
s1 = s1.split('').sort().join('');
s2 = s2.split('').sort().join('');

return s1 === s2;

}

function permutations(s1, s2) {
    // base case
    if(s1.length !== s2.length) return false;
  
  
   // hashmaps time O(n) space O(n)
   let map = {};
  // store letters of first string
   for(let letter of s1) {
     map[letter] > 0 ? map[letter]++ : map[letter] = 1;
   }
  
  // go through second string and subtract 1 for each letter found
   for(let letter of s2) {
     if(letter in map && map[letter] > 0) {
       map[letter]--;
     }
   }
  
  // if it is a permutation, no letters should remain (frequency count should be 0)
   for(let key in map) {
     if(map[key] > 0) {
       return false;
     }
   }
  
   return true;
  
  }
  
  
  
  console.log(permutations('iceman', 'cineea'));