/**
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the uniqu values in the array. There can be negative numbers in the array,
 * but it will always be sorted
 */

// keep track of current number and number ahead
// if number ahead is different, increment count

function countUniqueValues(arr) {
    if(!arr.length) return 0;
    let i = 0;
    let j = 0;
    let unique = 0;

    while(i < arr.length) {
        if(arr[i] !== arr[j]) {
            i = j;
            unique++;
        }
        j++;
    }

    return unique;
}

console.log(countUniqueValues([1,1,1,1,1,2]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));