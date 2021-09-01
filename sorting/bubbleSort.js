function bubbleSort(arr) {
    // sort arr in ascending order
    // takes element at position and compares to the remaining elements
    // creates sorted section towards the end of the array

    for(let i = arr.length; i >= 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(arr);
            }
        }
    }

    return arr;
}



console.log(bubbleSort([64,5,75,1,12]));

// Time O(n^2) using two for loops to get to solution
// Space O(1)