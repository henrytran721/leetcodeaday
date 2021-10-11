// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
    let len = matrix.length;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i; j < matrix.length; j++) {
            // swap diagonally but don't swap center
            if(i !== j) {
                let temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }
    
    // swap horizontally
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix.length / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][len - j - 1];
            matrix[i][len - j - 1] = temp;
        }
    } 
    
    return matrix;
};


// O(n^2)
// Space: O(1);