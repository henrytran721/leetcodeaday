// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


var isValid = function(s) {
    if(s.length <= 1) return false; 
    
    let map = {']': '[', '}': '{', ')': '('};
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(!(s[i] in map)) {
            stack.push(s[i]);
        } else if(stack[stack.length - 1] !== map[s[i]]) {
            return false;
        } else {
            stack.pop();
        }
    }
    
    return !stack.length ? true : false;
};


// Time: O(n) based on how many items are in s
// Space: O(n) worse case we can have is something like ((((((((((((((((((((())))))))))))))))))))) added to stack