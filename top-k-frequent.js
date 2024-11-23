/** https://leetcode.com/problems/top-k-frequent-elements */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const ht = {};
    nums.forEach(n => {
        if (ht[n]) {
            ht[n] += 1;
        }
        else {
            ht[n] = 1;
        }
    })
    const len = Object.values(ht).length + 1;
    const arr = new Array(len);

    Object.entries(ht).forEach(([k, v]) => {
        if (arr[v]) {
            arr[v].push(k);
        }
        else {
            arr[v] = [k]
        }
    })

    const res = []
    for (let i = len ; i >= 0; i -= 1) {
        if (arr[i]) {
            res.push(...arr[i])
        }
    }

    return res.splice(0, k).map(n => Number(n))
};