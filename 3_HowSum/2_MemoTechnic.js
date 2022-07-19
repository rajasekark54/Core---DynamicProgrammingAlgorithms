const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    if (target >= num) {
      let remainder = target - num;
      let remainderResult = howSum(remainder, numbers, memo);
      memo[target] = remainderResult;
      if (remainderResult !== null) {
        memo[target] = [...remainderResult, num];
        return memo[target];
      }
    }
  }

  return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null

// Time Complexity = O(n * m * m) - last m represent line 12 copying the object
//                 = O(nm^2)
// Space Complexity = O(m * m) - m size keys which has m size array
//                  = O(m^2)
