// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]


var findDisappearedNumbers = function(nums) {
    let map = {};
    let result = [];
    
    for(let num of nums) {
        map[num] > 0 ? map[num]++ : map[num] = 1;
    }
    
    for(let i = 1; i <= nums.length; i++) {
        if(!(i in map)) {
            result.push(i);
        }
    }
    
    return result;
};

// Time: O(n)
// Space: O(n)

var findDisappearedNumbers = function(nums) {
    let result = [];
    
    // identify number in array and mark the index of the value to be negative 
    for(let i = 0; i < nums.length; i++) {
        // identify number exists in array
        let idx = Math.abs(nums[i]) - 1;
        // set index to negative (index + 1 === num exists)
        if(nums[idx] > 0) nums[idx] = nums[idx] * -1;
    }
    
    for(let i = 0; i < nums.length; i++) {
        // if number is positive (i + 1) is missing
        if(nums[i] > 0) {
            result.push(i + 1);
        }
    }
    
    return result;
}

// Time: O(n)
// Space: O(1)