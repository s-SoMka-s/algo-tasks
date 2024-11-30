// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var pivotIndex = function(nums) {
    let lSum = 0;
    const totalSum = nums.reduce((n, acc) => acc += n, 0);
    
    for (let i = 0; i < nums.length; i++) {
        const rSum = totalSum - lSum - nums[i];
        if (rSum === lSum) {
            return i;
        }
        
        lSum += nums[i];
    }
    
    return -1;
};