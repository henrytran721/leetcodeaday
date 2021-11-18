// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

var findDuplicates = function(nums) {
    // hash map
    let map = {};
    let result = [];
    for(let num of nums) {
        if(map[num] > 0) {
            result.push(num);
            map[num]++;
        } else {
            map[num] = 1;
        }
    }
    
    return result;
};

// Time: O(n)
// Space: O(n)


var findDuplicates = function(nums) {
    // sort and two pointer
    nums = nums.sort();
    
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i - 1]) {
            result.push(nums[i]);
        }
    }
    
    return result;
};

// Time: O(n log n)
// Space: O(1)


var findDuplicates = function(nums) {
    let result = [];
    
    for(let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        // loop through arr, set nums[index] to negative
        // if we encounter the same value and we look at the index to be negative it is a duplicate
        if(nums[index] < 0) {
            result.push(Math.abs(nums[i]));  
        } else {
            nums[index] = nums[index] * -1;
        }

    }
    
    return result;
};

// Time: O(n)
// Space: O(1)