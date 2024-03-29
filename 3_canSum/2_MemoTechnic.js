const canSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (let num of numbers) {
    if (target >= num) {
      let remainder = target - num;
      if (canSum(remainder, numbers, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }

  return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(7, [2, 3, 5])); // true
console.log(canSum(7, [7, 14])); // true

// Time Complexity = O(m * n)
// Space Complexity = O(m)
