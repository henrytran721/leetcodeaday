// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

function rotateMatrix(m) {
    if(m.length !== m[0].length) return null;
    let len = m.length;
  
    for(let i = 0; i < len; i++) {
      for(let j = i; j < len; j++) {
        if(i !== j) {
          let temp = m[i][j];
          m[i][j] = m[j][i];
          m[j][i] = temp;
        }
      }
    }
  
    for(let i = 0; i < len; i++) {
      for(let j = 0; j < len / 2; j++) {
        let temp = m[i][j];
        m[i][j] = m[i][len - 1 - j];
        m[i][len - 1 - j] = temp;
      }
    }
  
    return m;
  }


// O(n^2)
// Space: O(1);