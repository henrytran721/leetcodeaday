/**
 * Write a function called sumZero which accepts a sorted array of integers, The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist
 */

//       i 
// [-5, -4 -3, -2, -1, 0, 1, 2, 3, 4]
//                                 j
// set pointers at beginning and end
// while i < j
// have a sum variable 
// if arr[i] + arr[j] === 0 return sum
// else if arr[i] + arr[j] > 0 j--
// else i++
// return [i, j]
 

function sumZero(arr) {
    if(!arr.length) return undefined;
    let i = 0;
    let j = arr.length - 1;

    while(i < j) {
        let sum = arr[i] + arr[j];
        if(sum === 0) {
            return [arr[i], arr[j]]; 
        } else if (sum > 0) {
            j--;
        } else {
            i++;
        }
    }

    return undefined;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2]));

// Time Complexity: O(n)
// Space: O(1)