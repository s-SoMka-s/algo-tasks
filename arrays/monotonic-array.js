// https://leetcode.com/problems/monotonic-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let prv = -Infinity;
    // nums[i+1] >= nums[i]
    const isIncreasing = nums.every(item => {
        if (item >= prv) {
            prv = item;
            return true;
        }

        return false;
    });

    prv = Infinity;
    // nums[i+1] <= nums[i]
    const isDecreasing = nums.every(item => {
        if (item <= prv) {
            prv = item;
            return true;
        }

        return false;
    });

    return isIncreasing || isDecreasing;
};