var canConstruct = function(ransomNote, magazine) {
    let map = {};
    // store ransomNote so we can eliminate letters as we go through magazine
    for(let letter of ransomNote) {
        map[letter] > 0 ? map[letter]++ : map[letter] = 1; 
    }
    
    // loop through magazine and subtract letters if it's in map
    for(let letter of magazine) {
        if(letter in map && map[letter] > 0) {
            map[letter]--;
        }
    }
    
    // true condition: if values are 0
    // false condition: if values are greater than 1, we can't construct ransom with magazine
    for(let key in map) {
        if(map[key] > 0) {
            return false;
        }
    }
    
    return true;
};

// Time: O(n + m)
// Space: O(n)