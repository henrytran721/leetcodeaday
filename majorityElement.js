var majorityElement = function(nums) {
    let hash = {};
    
    for(let num of nums) {
        hash[num] > 0 ? hash[num]++ : hash[num] = 1;
    }
    
    let majority = 0;
    let frequency = 0;
    
    for(let key in hash) {
        if(hash[key] > frequency) {
            majority = key;
            frequency = hash[key];
        }    
    }
    
    return majority;
};

// Time: O(n)
// Space: O(n)


var majorityElement = function(nums) {
    nums = nums.sort();
    return nums[Math.floor(nums.length / 2)];
};

// Time: O(n log n)
// Space: O(n)