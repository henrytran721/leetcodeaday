// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


var isSubsequence = function(s, t) {
    
    // scan t, if s[0] is found, remove from beginning of s
    // at the end, if s is an empty string return true
    // if s is not return false
    
    if(s.length === 0 && t.length === 0) return true;
    s = s.split('');
    for(let i = 0; i < t.length; i++) {
        if(s[0] === t[i]) {
            s.shift();
        }
    }
    
    return !s.length ? true : false;
};

// Time: O(n)
// Space: O(1)