// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let map1 = {};
    let map2 = {};
    
    for(let letter of s) {
        map1[letter] > 0 ? map1[letter]++ : map1[letter] = 1;
    }
    
    for(let letter of t) {
        map2[letter] > 0 ? map2[letter]++ : map2[letter] = 1;
    }
    
    for(let key in map1) {
        if(!(key in map2)) {
            return false;
        }
        
        if(map1[key] !== map2[key]) {
            return false;
        }
    }
    
    return true;
};


/**
 * Time: O(n)
 * Space: O(n)
 * 
 */