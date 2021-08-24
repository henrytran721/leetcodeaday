// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    let max = nums[0];
    let currMax = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        currMax = Math.max(currMax + nums[i], nums[i]);
        max = Math.max(currMax, max);
    }
    
    return max;
};

// Time O(n)
// Space O(1)