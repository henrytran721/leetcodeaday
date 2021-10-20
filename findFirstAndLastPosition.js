var searchRange = function(nums, target) {
    let first = findFirst(nums, target);
    let last = findLast(nums, target);
    return [first, last];
};


function findFirst(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;
    
    while(start < end) {
        let mid = Math.floor((start + end) / 2);
        if(target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    
    if(nums[start] === target) index = start;
    
    return index;
}

function findLast(nums, target) {
    let start = 0; 
    let end = nums.length - 1;
    let index = -1;
    
    while(start < end) {
        let mid = Math.floor((start + end) / 2) + 1;
        if(nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid;
        }
    }
    
    if(nums[end] === target) index = end;
    return index;
}