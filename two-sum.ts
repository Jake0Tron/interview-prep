// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

const twoSum = (nums, target) => {
  for (let start = 0; start < nums.length; start++) { // increment if we can't find an end value that sums to target
    for (let end = nums.length; end > start; end--) { // start at the end and iterate backwards
      if (nums[start] + nums[end] === target) {
        return [start, end]
      }
    }
  }
}

// test

console.log("Two sum:")
console.log(twoSum([3, 3], 6))