// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

var reverseVowels = function(s) {
    if(s.length === 1) return s;
    let stack = [];
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    s = s.split('');
    
    // collect vowels
    for(let i = 0; i < s.length; i++) {
        if(vowels.indexOf(s[i]) >= 0) {
            stack.push(s[i]);
        }
    }
    
    // replace vowels
    for(let i = 0; i < s.length; i++) {
        if(vowels.indexOf(s[i]) >= 0) {
            let letter = stack.pop();
            s[i] = letter;
        }
    }
    
    return s.join('');
};

// hello
// [e,o]
// holle