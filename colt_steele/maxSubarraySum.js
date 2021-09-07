/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number n.
 * The function should calculate the maximum sum of n consecutive elements in the array
 */

// sum up numbers from beginning to boundary
/**
 * 
 * 1 2 = 3
 * subtract i - n  + 1
 * add next number
 */

function maxSubarraySum(arr, n) {
    if(!arr.length) return null;
    let sum = 0;
    let max;
    for(let i = 0; i < n; i++) {
        sum += arr[i];
    }

    max = sum;

    for(let i = n; i < arr.length; i++) {
        sum = sum - arr[i - n];
        sum += arr[i];
        if(max < sum) {
            max = sum;
        } 
    }
    return max;
} 

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
console.log(maxSubarraySum([4,2,1,6], 1));
console.log(maxSubarraySum([4,2,1,6,2], 4));
console.log(maxSubarraySum([], 4));

// Time O(n)
// Space O(1)