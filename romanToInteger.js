// Turn roman numerals to integer

var romanToInt = function(s) {
    let dict = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000};
    
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(dict[s[i]] < dict[s[i + 1]]) {
            result -= dict[s[i]];
        } else {
            result += dict[s[i]];
        }
    }
    
    return result;
};

// O(n) time to loop over string
// O(1) space, hash map is defined subset

