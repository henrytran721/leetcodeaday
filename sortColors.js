// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

var sortColors = function(nums) {
    if(nums.length === 1) return nums[0]; 
    
    let map = {};
    // store frequency of each number
    for(let num of nums) {
        map[num] > 0 ? map[num]++ : map[num] = 1;
    }
    
    // overwrite the array in place based on conditions
    for(let i = 0; i < nums.length; i++) {
        if(map[0] > 0) {
            nums[i] = 0;
            map[0]--;
        } else if(map[1] > 0) {
            nums[i] = 1;
            map[1]--;
        } else if (map[2] > 0) {
            nums[i] = 2;
            map[2]--;
        }
    }
    
    console.log(nums);
};

// Time: O(n)
// Space: O(n)