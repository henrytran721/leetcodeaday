// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays 
// and you may return the result in any order.

var intersect = function(nums1, nums2) {
    let map = {};
    for(let num of nums1) {
        map[num] > 0 ? map[num]++ : map[num] = 1;
    } 
     
     let result = [];
     // push to result as many there are in the second array
     // while making sure there are the same number in first array 

     // map[num] > 0 controls the amount in first array
     // looping nums2 only requires pushing what's in nums2
     for(let num of nums2) {
         if(num in map && map[num] > 0) {
             result.push(num);
             map[num]--;
         }
     }
     return result;
 };