var setZeroes = function(matrix) {
    let positions = [];
    
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] === 0) {
                positions.push([row, col]);
            }
        }
    }
    
    // set rows
    for(let i = 0; i < positions.length; i++) {
        // row positions[i][0]
        // set matrix
        for(let j = 0; j < matrix.length; j++) {
            matrix[positions[i][0]][j] = 0;
        }
    }
    
    // set columns
    for(let i = 0; i < positions.length; i++) {
        // positions[i][1]
        for(let j = 0; j < matrix.length; j++) {
           matrix[j][positions[i][1]] = 0;
        }
    }
};

// Time: O(n x m)
// n is the number of arrays in the matrix, m is the number of inputs within each array
// Space: O(n)