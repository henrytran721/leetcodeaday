// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


var productExceptSelf = function(nums) {
    let left = [];
    let right = [];
    
    // overall: calculate product of everything to left of current index
    // set left[0] to 1 because there is nothing to the left of first index
    left[0] = 1;
    // start at second index and insert nums[0] into left[1]
    for(let i = 1; i < nums.length; i++) {
        // multiply previously calculated value with last value
        left[i] = left[i - 1] * nums[i - 1];
    }
    
    // overall: calculate product of everything to right of current index
    // start at the end because nothing is to the right of last index
    right[nums.length - 1] = 1;
    for(let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }
    
    // multiply both at current index
    for(let i = 0; i < nums.length; i++) {
        nums[i] = left[i] * right[i];
    }
    
    return nums;
};

// Time: O(n)
// Space: O(n)