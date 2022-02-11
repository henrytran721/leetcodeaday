var majorityElement = function(nums) {
    let hash = {};
    
    for(let num of nums) {
        hash[num] > 0 ? hash[num]++ : hash[num] = 1;
    }
    
    let majority = 0;
    let frequency = 0;
    
    for(let key in hash) {
        if(hash[key] > frequency) {
            majority = key;
            frequency = hash[key];
        }    
    }
    
    return majority;
};

// Time: O(n)
// Space: O(n)


var majorityElement = function(nums) {
    nums = nums.sort();
    return nums[Math.floor(nums.length / 2)];
};

// Time: O(n log n)
// Space: O(n)

// def majority_element(nums)
//     hash = {}
    
//     nums.each do |num|
//         if hash[num] == nil
//             hash[num] = 1
//         else
//             hash[num] += 1
//         end
//     end
    
//     max = nums[0]
//     hash.each do |key, val|
//         if val > hash[max]
//             max = key
//         end
//     end
    
//     max
// end
