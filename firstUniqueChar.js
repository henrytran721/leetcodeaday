// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

/**
 * Input: s = "leetcode"
   Output: 0
 */

   var firstUniqChar = function(s) {
    // loop over s and store letters into a hash map
    // identify letter that has character count of 1 and search for that index
    // Time: O(n) Space: O(1) because alphabet only has 26 letters
    // Good questions: are letter uppercase and lowercase or only one type?
    
    if(s.length === 1) return 0;
    
    let map = {};
    
    for(let letter of s) {
        map[letter] > 0 ? map[letter]++ : map[letter] = 1;
    }
    
    let unique = '';
    
    for(let key in map) {
        if(map[key] === 1) {
            unique = key;
            break;
        }
    }
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === unique) {
            return i;
        }
    }
    
    return -1;
};