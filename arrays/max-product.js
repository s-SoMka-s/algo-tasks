// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = nums[0];
    let maxPrev = -Infinity;
    
    nums.forEach((i, index) => {
          // skip first
          if (index < 1) {
              return;
          }
        
          if (i > max) {
            maxPrev = max;
            max = i;
            return;
        }
        
        if (i > maxPrev) {
            maxPrev = i;
        }
    })
    
    return (max - 1) * (maxPrev - 1)
  };