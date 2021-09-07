// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    // sort and search O(1) space O(n log n) time
    nums = nums.sort();
    console.log(nums);
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == nums[i + 1]) {
            return true;
        }
    }
    
    return false;
};


var containsDuplicate = function(nums) {
    // hash map O(n) time, O(n) space
    let hash = {};
    
    for(let num of nums) {
        hash[num] > 0 ? hash[num]++ : hash[num] = 1;
    }
    
    for(let key in hash) {
        if(hash[key] > 1) return true;
    }
    
    return false;
};