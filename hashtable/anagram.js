/** https://leetcode.com/problems/valid-anagram/ */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    const ht = {}
    for (var i of s) {
        if (ht[i]) {
            ht[i] += 1;
        }
        else {
            ht[i] = 1
        }
    }
    
    for (var i of t) {
        if (ht[i] !== null || ht[i] !== undefined) {
            ht[i] -= 1
        }
    }
    
    return !Object.values(ht).some(i => i !== 0)
};
