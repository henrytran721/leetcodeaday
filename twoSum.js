/** 
 * Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

 */


// isolate one index value and check the rest of the values for a match
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i,j];
            }
        }
    }
}

// Time Complexity: O(n^2) nested for loops
// Space Complexity: O(1)

var twoSum = function(nums, target) {
    // use a hash map as we are looping over the array
    // store the difference within hashmap and the index we found difference
    // if difference is found within hashmap as we are looping, we found a match and return the current index
    // and index previously found within hashmap
    
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in map) {
            return [map[nums[i]], i];
        }
        map[target - nums[i]] = i;
    }
    
    // Time Complexity: O(n) only using 1 loop
    // Space Complexity: O(n) to store previously seen indexes
};

/***********
 * Ruby 
 * 
 * 
 */

 def two_sum(nums, target)
 nums.each_with_index do |num, index|
     for i in index + 1..(nums.length() - 1)
         if target == (num + nums[i])
             return [index, i]
         end
     end
 end 
end

/** O(n) solution */
def two_sum(nums, target)
    map = {}
    
    nums.each_with_index do |num, index|
        if map.key?(num)
            return [map[num], index]
        end
        map[target - num] = index;
    end  
end