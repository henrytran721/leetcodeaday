// implement an algorithm to determine if a string has all unique characters


function isUnique(s) {
    if(!s.length) return true;
    let map = {};
  
    for(let letter of s) {
      if(map[letter] > 0) {
        return false;
      } else {
        map[letter] = 1;
      }
    }
  
    return true;
  }
  
  console.log(isUnique('gayle'));
  
  // Time O(n)
  // Space O(n)
  
  // cannot use additional data structure O(1) space
  function isUnique(s) {
    for(let i = 0; i < s.length; i++) {
      for(let j = 0; j < s.length; j++) {
        if(i !== j && s[i] == s[j]) {
          return false;
        }
      }
    }
    
      return true;
  }
  
  // Time O(n^2)
  // Space O(1)