/** https://leetcode.com/problems/two-sum */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const ht = {}
    for (let i = 0; i < nums.length; i++) {
        const k = target - nums[i];
        if (ht[k] !== null && ht[k] !== undefined) {
            return [ht[k], i];
        }

        ht[nums[i]] = i;
    }
};