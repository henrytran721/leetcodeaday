/**
 * Given two strings s and t, determine if they are isomorphic.
    Two strings s and t are isomorphic if the characters in s can be replaced to get t.
    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 * 

    Input: s = "egg", t = "add"
    Output: true
 */

    // create mapping between letters
    // {e: a, g: d}
    // and if there are repeating characters check if the letters correspond in mapping


var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};
    
    for(let i = 0; i < s.length; i++) {
        // if sLetter is not in sMap and tLetter is not in tMap then create the mapping
        if(!(s[i] in sMap) && !(t[i] in tMap)) {
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i];
            // check if the next letter is in map and corresponds to other word
        } else if(!(sMap[s[i]] === t[i] && tMap[t[i]] === s[i])) {
            return false;
        }
    }
    
        
    console.log(sMap, tMap);
    return true;
};


// Time: O(n)
// Space: O(1)