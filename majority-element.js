/**
 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  const m = {}
  for(let num of nums) {
    m[num] = (m[num] || 0 ) + 1
  }

  // now we have a count of each number. Let's sort this by highest count and return the first (highest)
  return Object.keys(m).map(num => ({ val: num, count: m[num]})).sort((a,b) => b.count-a.count)[0].val
};