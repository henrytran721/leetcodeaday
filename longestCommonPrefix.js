var longestCommonPrefix = function(strs) {
    let result = '';
    if(strs.length < 0) return result;

    
    for(let i = 0; i < strs[i].length; i++) {
        for(let j = 1; j < strs.length; j++) {
            if(strs[0][i] !== strs[j][i]) {
                return result;
            }
        }
        result += strs[0][i];
    }
            
        return result;
};

// Time: O(n)
// Space: O(1)

