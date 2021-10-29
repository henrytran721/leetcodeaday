function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var sortedArrayToBST = function(nums) {
  if(!nums.length || nums == null) {
      return null;
  }
  
  let mid = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));
  
  return node;
};

sortedArrayToBST([-10,-3,0,5,9]);

// inital root will always be middle element
// breaks up the array to left and right
// [-10, -3]
// [5, 9]
// subNums[1] > subNums[0]
// place subNums[1] to the left and right respectively
// [-10]
// [5]
// next step, subNums[0] will always be less than subNums[1] so we place to left