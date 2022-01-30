/**
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Input: x = 121
Output: true
 */

var isPalindrome = function(x) {
    if(x < 0) return false;
    
    let copy = parseInt(x.toString().split('').reverse().join(''));
    return copy === x;
};

var isPalindrome = function(x) {
    if(x < 0) return false;
    
    let copy = x;
    let reverse = 0;
    
    while(copy !== 0) {
        let lastDigit = parseInt(copy % 10);
        copy = parseInt(copy / 10);
        reverse *= 10;
        reverse += lastDigit;
    }
    
    return reverse === x;
};

// Time O(log10N) because we are dividing by base 10 based on the number of digits there are
// Space O(1)
// Felicia was here

/*** Ruby */
def is_palindrome(x)
    if x < 0
        return false
    end
    
    copy = x.to_s.reverse().to_i
    return copy == x ? true : false
end