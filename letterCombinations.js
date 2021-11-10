// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


// works for 2 letters LOL
var letterCombinations = function(digits) {
    if(!digits) return [];
    let map = {
        "2": ['a', 'b', 'c'],
        "3": ['d', 'e', 'f'],
        "4": ['g', 'h', 'i'],
        "5": ['j', 'k', 'l'],
        "6": ['m', 'n', 'o'],
        "7": ['p', 'q', 'r', 's'],
        "8": ['t', 'u', 'v'],
        "9": ['w', 'x', 'y', 'z']
    }
    
    let result = [];
    
    if(digits.length === 1) {
        return map[digits[0]];
    }

    // use recursion to look ahead
    function helper(nums) {
        if(!nums.length) return;
        let first = nums.slice(0,1);
        let remaining = nums.slice(1);
        for(let i = 0; i < map[first[0]].length; i++) {
            let firstLetter = map[first[0]][i];
            let str = '';
            for(let j = 0; j < remaining.length; j++) {
                for(let letter of map[remaining[j]]) {
                    str = firstLetter + letter;
                    result.push(str);
                }
            }
        }
        helper(nums.slice(1));
    }
    
    helper(digits);
    
    return result;
};

// Time: O(n2)
// Space: O(n) callstack use