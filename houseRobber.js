// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, the only constraint 
// stopping you from robbing each of them is that adjacent houses have 
// security systems connected and it will automatically contact the police 
// if two adjacent houses were broken into on the same night.


// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Dynamic programming
// using a helper array, makes things more straight forward without in-place replacing 
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    let visited = [];
    visited[0] = nums[0];
    visited[1] = Math.max(nums[0], nums[1]);
    
    for(let i = 2; i < nums.length; i++) {
        visited[i] = Math.max(nums[i] + visited[i - 2], visited[i - 1]);
    }
    
    return visited[visited.length - 1];
};

// replace in place
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    nums[1] = Math.max(nums[0], nums[1]);
    
    for(let i = 2; i < nums.length; i++) {
        nums[i] = Math.max(nums[i] + nums[i - 2], nums[i - 1]);
    }
    
    return nums[nums.length - 1];
};

// Time O(n), we have to visit each index and compare between the last one or i - 2
// Space: O(n) we have to store each calculation within an array of size n
// potentially can be O(1) if we evaluate in place