/**
 * There are three types of edits that can be performed on a string:
 * insert a character
 * remove a character
 * replace a character
 * Given two strings, write a function to check if they are one edit (or zero edits) away
 */


 function oneAway(s1, s2) {
  
    function oneMissing(first, second) {
      if(first.length !== second.length - 1) {
        return false;
      } else {
        let diff = false;
        let fP = 0;
        let sP = 0;
        while(fP < first.length) {
          if(first[fP] !== second[sP]) {
            // if we find a difference, set diff to true and move on
            // this detects one and only 1 difference and if a second difference is found, there is more than one difference
            // e.g. pale, ple, when pointer points at a, move on to next character and compare to the end, returns true
            if(diff) {
              return false;
            } else {
              diff = true;
              sP++;
            }
          } else {
            fP++;
            sP++;
          }
        }
        return true;
      }
    }
  
    function oneDiff(first, second) {
      if(first.length !== second.length) {
        return false;
      } else {
        let diff = false;
        let fP = 0;
        let sP = 0;
        while(fP < first.length) {
          // detect 1 difference, move on to next character, if block runs again found 2 differences and return false
          if(first[fP] !== second[sP]) {
            if(diff) {
              return false;
            } else {
              diff = true;
            }
          }
          fP++;
          sP++;
        }
        return true;
      }
    }
  
    return oneMissing(s2, s1) || oneMissing(s1, s2) || oneDiff(s1, s2);
  }
  
  console.log(oneAway('pale', 'ple')); // true
  console.log(oneAway('pales', 'pale')); // true
  console.log(oneAway('pale', 'bale')); // true
  console.log(oneAway('pale', 'bake')); // false


  // Time: O(n + m)
  // Space: O(1)