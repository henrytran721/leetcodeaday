// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {
    if(nums.length === 1) return nums;
    // move backwards so we don't encounter previously seen zeroes when we push to end
    for(let i = nums.length - 1; i >= 0; i--) {
        if(!nums[i]) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};

// Time: O(n) array traversal and reindex with splicing 
// Space: O(1)