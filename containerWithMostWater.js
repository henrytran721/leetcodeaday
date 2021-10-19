// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.


var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    
    while(left < right) {
        // calculate width based on index
        let w = right - left;
        // calculate height based on the minimum of either side, can't overlap
        let h = Math.min(height[left], height[right]);

        let area = w * h;
        maxArea = Math.max(maxArea, area);
        // move based on what will yield a greater area
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
};


// Time: O(n), traverse based on how long our array is
// Space: O(1) no extra space allocated
