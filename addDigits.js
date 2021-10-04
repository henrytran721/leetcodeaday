// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.


var addDigits = function(num) {
    // change to string
    while(num >= 10) {
        num = num.toString().split('').map((digit) => parseInt(digit)).reduce((total, val) => total + val);
    }
    return num;
};

// Time complexity ambiguous because of different methods used


var addDigits = function(num) {
        // use math 
        while(num >= 10) {
            // extract ones digit
            let remainder = num % 10;
    
            // get tenths digit or greater
            num = Math.floor(num / 10);
            
            // readd remainder to tenths digit
            num += remainder;
        }
        
        return num;
}

// Time: O(n) based on how many digits are in the number / potentially O(1) because digit cannot exceed MAX_VALUE