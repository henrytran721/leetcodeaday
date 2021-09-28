// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


var containsNearbyDuplicate = function(nums, k) {
    
    // nums[i] === nums[j]
    // abs(i - j) <= k
    
    // [1,2,3,1] k = 3
    /***
       i = 0;
       j = 3; 
       
       abs(0 - 3) <= k(3)
      
    */
    
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = nums.length - 1; j >= 0; j--) {
//             if(nums[i] === nums[j] && i !== j) {
//                 if(Math.abs(i - j) <= k) {
//                     return true;
//                 }
//             }
//         }
//     }
    
//     return false;

// Time: O(n^2)
// Space: O(1)
    
    
    let map = {};
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if(!(num in map)) {
            map[num] = i;
        } else {
            let oldIndex = map[num];
            if(Math.abs(oldIndex - i) <= k) {
                return true;
            } else {
                map[num] = i;
            }
        }
    }
    
    return false;
    
    console.log(map);

    // Time: O(n)
    // Space: O(n)
};