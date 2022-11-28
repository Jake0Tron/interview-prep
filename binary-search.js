/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  if (!nums || nums.length == 0) return -1

  let start = 0, end = nums.length;

  while (start < end) {
      const mid = Math.floor((start + end) / 2)

      if (nums[mid] === target) {
          return mid
      } else if (nums[mid] > target){
          // look lower
          end = mid
      } else if (nums[mid] < target) {
          // look higher
          start = mid + 1
      }
  }
  return -1;
};