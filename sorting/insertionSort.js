function insertionSort(arr) {
    // marks first element 
  
    for(let i = 0; i < arr.length; i++) {
      let currVal = arr[i];
      for(var j = i - 1; j >= 0; j--) {
        // keep going if arr[j] > arr[i]
        if(arr[j] > currVal) {
          arr[j + 1] = arr[j];
        } else {
          break;
        }
      }
      arr[j + 1] = currVal;
    }
  
    return arr;
  }
  
  //                                 i
  console.log(insertionSort([3,38,44,5]));
  //                               j