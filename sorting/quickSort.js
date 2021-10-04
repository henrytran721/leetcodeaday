/**
 * Select a pivot point and count how many values are less than current pivot
 * [4, 42, 10, 1, 3, 5, 30]
 * [1, 3, 4, 42, 10, 5, 30]
 */


function pivot(arr, start = 0, end = arr.length) {
    let pivot = start;
    let pivotIndex = start;
    
    for(let i = start + 1; i < arr.length; i++) {
        if(arr[i] < arr[pivot]) {
            pivotIndex++;
            let temp = arr[i];
            arr[i] = arr[pivotIndex];
            arr[pivotIndex] = temp;
        }
    }

    let temp = arr[pivot];
    arr[pivot] = arr[pivotIndex];
    arr[pivotIndex] = temp;

    return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort([4, 42, 10, 1, 3, 5, 30]));

// Time: O(n log n)