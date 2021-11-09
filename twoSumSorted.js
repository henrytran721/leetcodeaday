// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

var twoSum = function(nums, target) {
    // use two pointer approach
    // if sum is greater than target, move end to the left
    // if sum is less than target, move start to the right
    let start = 0;
    let end = nums.length - 1;
    
    while(true) {
        let sum = nums[start] + nums[end];
        
        if(sum === target) {
            return [start + 1, end + 1];
        } else if(sum > target) {
            end--;
        } else {
            start++;
        }
    }

    return [-1, -1];
};

// Time: O(n) because we're searching the whole array
// Space: O(1) no extra space allocated