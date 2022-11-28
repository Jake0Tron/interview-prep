/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let start = 1, end = n;
    
    // start will continually shift towards end, and end will shift towards start in increments of 
    // ~1/2 the remaining data set until the midpoint lands on the bad version. (Binary search)
    // That midpoint will be equal to both start (which will equal end and break the loop), in which case, start now contains the bad index.
    while (start < end) {
      // find the midpoint
      const mid = Math.floor((start + end) /2)
      if (isBadVersion(mid)){
        // It's bad, look back in time by moving our end point to the midpoint
        end = mid
      }else{
        // It's good, look forward in time by moving our start point just after the midpoint
        start = mid + 1
      }
    }
    return start;
  };
};