/**
 * Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const pointList = []
    for (let pair of points) {
      pointList.push({pair, distance: getDistanceToOrigin(pair)})
    }
    // sort by lowest distance and take top k number
    return pointList.sort((a,b) => a.distance - b.distance).slice(0,k).map(({pair}) => pair);
};

// return the absolute number of units between the point and the origin abs(sqrt(a^2 + b^2))
const getDistanceToOrigin = (a) => Math.abs(Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1] , 2)))


console.log(kClosest([[2,3], [4,5], [1,1]], 2))