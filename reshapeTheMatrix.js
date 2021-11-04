/**
https://leetcode.com/problems/reshape-the-matrix/

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// reshape is valid if r x c === the number of items in the matrix
// 2 for loops and a count

// Input: mat = [[1,2],[3,4]], r = 1, c = 4 
// Output: [[1,2,3,4]]
// r will tell us how many internal arrays the matrix will have
// c will tell us how many items are in each array within the matrix

// 4 x 1 = 4

// Input: mat = [[1,2],[3,4]], r = 2, c = 4
// Output: [[1,2],[3,4]]

// Input: mat = [[1,2],[3,4],[5,6],[7,8]], r = 2, c = 4
// Output: [[1,2],[3,4]]
// [1,2,3,4], [5,6,7,8]

var matrixReshape = function(mat, r, c) {
    let validProduct = r * c;
    let count = 0;
    let arr = [];
    for(let i = 0; i < mat.length; i++) {
      for(let j = 0; j < mat[i].length; j++) {
        count++;
        arr.push(mat[i][j]);
      }
    }

    if(validProduct !== count) return mat;
    let matrix = [];
    let start = 0;
    let end = c;
  // for every loop of j, we want to push c # of values to innerArr
  // and then move the pointer to the next value and then repeat
    for(let i = 0; i < r; i++) {
      let innerArr = [];
      for(let j = start; j < end; j++) {
        innerArr.push(arr[j]);
      }
      start += c;
      end += c;
      matrix.push(innerArr);
    } 

    return matrix;
};

// console.log(matrixReshape([[1,2],[3,4]], 1, 4));//[1,2,3,4]
// console.log(matrixReshape([[1,2],[3,4]], 2, 4)); // original
console.log(matrixReshape([[1,2],[3,4],[5,6],[7,8]], 2, 4));
// console.log(matrixReshape([[1,2,3,4,5,6], [7,8,9,10,11,12]], 6, 2)); // [1,2,3,4], [5,6,7,8]



    //   for(var j = tracker; j < c; j++) {
    //    console.log(j);
    //    innerArr.push(arr[j]);
    //  }