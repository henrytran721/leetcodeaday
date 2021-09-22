/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
 * Input: nums = [3,0,1]
 * Output: 2
 */


 var missingNumber = function(nums) {
    // find max value 
    // create hash map an dset all values up to max values to false
    // iterate through array and set to true
    
    let map = {};
    
    for(let i = 0; i <= nums.length; i++) {
        map[i] = false;
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            map[nums[i]] = true;
        }
    }
    
    for(let key in map) {
        if(map[key] == false) {
            return key;
        }
    }

    // Time: O(n)
    // Space: O(n)
    
    // sort O(n log n)
    // space: O(1)


        // using sum
    
        let arrSum = 0;
        let sum = 0;
        
        for(let i = 1; i <= nums.length; i++) {
            arrSum += nums[i - 1];
            sum += i;
        }
        
        return sum - arrSum;
        
        // the sum of the array will be less than the sum of the length by the missing number
        
        // Time: O(n)
        // Space: O(1)
};