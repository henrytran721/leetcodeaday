// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1: 

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2: 

// Input: nums = [1,3,5,6], target = 2
// Output: 1

var searchInsert = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    // if loop finishes, start overflows over end breaking out of start === end condition
    // if target = 2
    // [1,3,5,6]
    //  s
    //  e
    //  m     meets the condition of target > nums[mid] --> start = mid + 1
    
    // [1,3,5,6]
    //  e s
    //  m 
    
    // breaks out of loop, and start is where the number should be
    
    return start;
};


// Time: O (log n) using binary search
// Space: O(1)

// ruby
def search_insert(nums, target)
    left = 0
    right = nums.length() - 1
    
    while(left < right)
        mid = ((left + right) / 2).floor()
        if target == nums[mid]
            return mid
        elsif target > nums[mid]
            left = mid + 1
        else
            right = mid - 1
        end
    end
    
    result = 0
    nums.each_with_index do |num, i| 
        if target > num
            result += 1
        end
    end
    
    return result
end