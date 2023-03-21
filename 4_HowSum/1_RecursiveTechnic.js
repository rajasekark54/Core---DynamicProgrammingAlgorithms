const howSum = (target, numbers) => {
  if (target === 0) return [];
  if (target < 0) return null;

  for (let num of numbers) {
    if (target >= num) {
      let remainder = target - num;
      let remainderResult = howSum(remainder, numbers);
      if (remainderResult !== null) {
        return [...remainderResult, num];
      }
    }
  }

  return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2 ]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
// console.log(howSum(300, [7, 14])); // null

// Time Complexity = O(n^m)
// Space Complexity = O(m)
