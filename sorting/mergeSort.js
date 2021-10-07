// merge sort 

/**
 *  [44, 3, 9, 81, 15, 6, 69]
 *  
 * [44, 3, 9, 81]  [15, 6, 69]
 * 
 * [44, 3] [9, 81]  [15, 6] [69]
 *         
 * [44] [3] [9] [81] [15] [6] [69]        
 * // sort 
 * [3,44] [9, 81]   [6, 15] [69]
 * 
 * 
 * 
 * [3, 9, 44, 81]   [6, 15, 69]
 * 
 * [3, 6, 9, 44, 69, 81]
 * 
 * Merge sort breaks our array down to the base case of arr.length === 1 
 * and then builds it back up in sorted formation
 * 
 * Recursion 
 */

// function that sorts our arrays
// our arrays have to be in sorted order

function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// use recursion to sort the array
// break down left most and then right and then build arr back up
function mergeSort(arr) {
    if(arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([1,44,36,9,88,10,66,64,78,90]));