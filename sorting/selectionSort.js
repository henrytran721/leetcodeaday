// find minimum element and place to the left of array

function selectionSort(arr) {
    // go through array and find lowest value element
    // once loop completes, swap with current index
    // loop until end of array

    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
} 

console.log(selectionSort([64,5,75,1,12]));