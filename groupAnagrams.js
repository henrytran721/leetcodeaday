var groupAnagrams = function(strs) {
    // find if sorted version of each word matches in map
    // push to specific map if it matches
    let map = {};
    let result = [];
    
    for(let word of strs) {
        // find sorted version of word and if found place into bucket
        let sorted = word.split('').sort().join('');
        if(!(map[sorted])) {
            map[sorted] = new Array();
        }
        map[sorted].push(word);
    }
    
    for(let key in map) {
        result.push(map[key]);
    }
    
    return result;
};

// Time: O(n log n)
// Space: O(n)