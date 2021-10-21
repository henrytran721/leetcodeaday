// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// Input: arr = [0,1,0]
// Output: 1

var peakIndexInMountainArray = function(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i + 1]) {
            return i;
        }
    }
};

// Time: O(n)
// Space: O(1)

var peakIndexInMountainArray = function(arr) {
    
    let start = 0;
    let end = arr.length - 1;
    
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        
        // if from mid we are descending, the peak is on the left side of arr
        // otherwise if arr[mid + 1] is greater than our mid, we have found our peak
        if(arr[mid] < arr[mid + 1]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    
    return start;
};

// [29, 69, 100, 99, 79, 78, 67, 36, 26, 19]
// if arr[mid] < arr[mid + 1] search the right side of the array to find peak
// otherwise, search the left side to find the peak
// start = 29, mid = 79, end = 19
// 79 > 78 -> shift end to mid and search left side
// [29, 69, 100, 99, 79] serach within this sub array
// start = 29, mid = 100, end = 79
// 100 > 99 -> shift end to 100 and search within subarray
// [29, 69, 100]
// start = 29, mid = 69, end = 100
// 69 < 100, start = mid + 1 
// start = 100, end = 100, mid = 100
// return start (100)

// Time: O(log n)
// Space: O(1)