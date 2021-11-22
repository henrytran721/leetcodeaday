// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). 
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.

/**
 * Minimum height of both sides will give us the height 
 * end value - start value will give us width
 * height * width = area
 * store maximum area value we've seen
 * move height pointers based on which value is greater
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1; 
    let area = 0;
    
    while(start < end) {
        let h = Math.min(height[start], height[end]);
        let w = end - start;
        area = Math.max(h * w, area);
        
        if(height[end] > height[start]) {
            start++;
        } else {
            end--;
        }
    }
    return area;
};

// Time: O(n)
// Space: O(1)


// Time: O(n), traverse based on how long our array is
// Space: O(1) no extra space allocated
