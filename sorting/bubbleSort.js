function bubbleSort(arr) {
    for(let i = arr.length; i >= 0; i--) {
        let swap = false;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                swap = true;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if(!swap) break;
    }

    return arr;
}

console.log(bubbleSort([64, 9, 12, 1, 25] ));

// [64, 9, 12, 1, 25]  
// start at the end
// loop to i - 1 (first iteration: 64, 9, 12, 1, 25) -> (64, 9, 12, 1) -> 64 -> 9 -> 12 
// creates sorted upper bound


// Optimization 
// detect whether swap occurs / if arr is already sorted with boolean
// if no swap, arr is sorted and we return the arr

// Time O(n^2)
// Space O(1)