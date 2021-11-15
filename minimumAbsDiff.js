// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

// a, b are from arr
// a < b
// b - a equals to the minimum absolute difference of any two elements in arr

// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

var minimumAbsDifference = function(arr) {
    let result = [];
    let min = Infinity;
    arr = arr.sort((a, b) => a - b);
    
    for(let i = 0; i < arr.length - 1; i++) {
        let diff = Math.abs((arr[i] - arr[i + 1]));
        min = Math.min(min, diff);
    }
    
    for(let i = 0; i < arr.length - 1; i++) {
        if(Math.abs((arr[i] - arr[i + 1])) === min) {
            result.push([arr[i], arr[i + 1]]);
        };
    }
    
    return result;
};

// Time: O(n log n) sorting
// Space: O(n)