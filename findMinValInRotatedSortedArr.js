// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

var findMin = function(nums) {
    if(!nums.length) return -1;
    let start = 0;
    let end = nums.length - 1;
    
    if(nums[end] >= nums[start]) {
        return nums[start];
    }
    
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        console.log(start, mid, end);
        // if mid is greater than mid + 1, found pivot and rotation
        if(nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        
        // if mid - 1 is greater than our current mid, also found pivot and return mid
        if(nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }
        
        // search right if there is rotation else search left
        if(nums[mid] > nums[0]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
};

// Time: O(log n)
// Space: O(1)