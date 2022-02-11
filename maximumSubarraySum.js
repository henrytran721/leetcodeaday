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

// compares the currMax + current number vs. the number 
// stores the greatest sum in another variable 
// [-2,1,-3,4,-1,2,1,-5,4]
// -2 : -2  currMax: -2, max: -2
// -2 :  1  currMax: 1, max: 1
// -3 + 1 : -3 currMax: -2, max: 1
// 4 + -2 : 4 currMax: 4, max: 4
// 3 : -1 currMax: 3, max: 4
// 3 + 2 : 2 currMax: 5, max: 5
// 5 + 1 : 1 currMax: 6, max: 6 


// Ruby
// def max_sub_array(nums)
//     maxSum = nums[0]
//     currSum = nums[0]
//     arr = Array.new
//     # to loop from 1 to end of array we need to create a copy of nums from 1 to -1 
//     arr = nums[1..-1]
    
//     arr.each_with_index do |num, i|
//         currSum = [(currSum + arr[i]), arr[i]].max
//         maxSum = [currSum, maxSum].max
//     end
    
//     maxSum
// end
