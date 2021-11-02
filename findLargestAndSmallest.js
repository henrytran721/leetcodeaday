function findLargestAndSmallest(nums) {
    let max = -Infinity;
    let min = Infinity;
  
    for(let i = 0; i < nums.length; i++) {
      if(nums[i] > max) {
        max = nums[i];
      } else if(nums[i] < min) {
        min = nums[i];
      }
    }
  
    return [min, max];
  }
  
  
  findLargestAndSmallest([89, 99, 24, 3, 66, 1, 93, 8]);

  // T: O(n)
  // S: O(1)