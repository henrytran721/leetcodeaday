// Given a string s, find the length of the longest substring without repeating characters.
// Medium

/**
 * 
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 */

 var lengthOfLongestSubstring = function(s) {
    
    if(!s.length) return 0;
    
    let currentMax = '';
    let currentStr = '';
    
    for(let i = 0; i < s.length; i++) {
        // find duplicate within string we've searched so far
        let detectDuplicate = currentStr.indexOf(s[i]);
        
        // if no duplicate is detected, add the next letter 
        // else slice from up to the duplicate + 1 and add next letter
        if(detectDuplicate < 0) {
            currentStr += s[i];
        } else {
            currentStr = currentStr.slice(detectDuplicate + 1) + s[i];
            console.log(currentStr);
        }
        
        // whenever our currentStr is greater than what we've seen, replace with longer string
        if(currentStr.length > currentMax.length) {
            currentMax = currentStr;
        }
    }
    
    // detect if string is longer after loop ends
    if(currentStr.length > currentMax.length) {
        currentMax = currentStr;
    }
    
    return currentMax.length;
};

// Time: O(n^2) because of indexOf search
// Space: O(n)