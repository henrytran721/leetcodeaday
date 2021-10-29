var findShortestSubArray = function(nums) {
    if(!nums.length) return 0;
    // find value that is most frequent
    // find index of first occurrance can do it manually or indexOf
    // find index of last occurrance lastIndexOf
    
    let map = {};
    
    for(let num of nums) {
        map[num] > 0 ? map[num]++ : map[num] = 1;
    }
    
    let max = [];
    let frequency = 0;
    for(let key in map) {
        if(map[key] > frequency) {
            frequency = map[key];
        }
    }
    
    for(let key in map) {
        if(map[key] === frequency) {
            max.push(Number(key));
        }
    }
    
    let degree = Infinity;
    for(let i = 0; i < max.length; i++) {
        let first = nums.indexOf(max[i]);
        let second = nums.lastIndexOf(max[i]);
        let diff = second - first;
        degree = Math.min(diff, degree);
    }
    
    return degree + 1;
};

// Time: O(n^2) 
// Space: O(n)