var intersection = function(nums1, nums2) {
    // hash tables
    let map1 = {};
    let map2 = {};
    let result = [];
    
    // add digits to hashmap
    for(let num of nums1) {
        map1[num] > 0 ? map1[num]++ : map1[num] = 1;
    }
    
    for(let num of nums2) {
        map2[num] > 0 ? map2[num]++ : map2[num] = 1;
    }
    
    for(let key in map1) {
        if(key in map2) {
            result.push(key);
        }
    }
    
    return result;

};


// Time: O(n + m);
// Space: O(n + m);