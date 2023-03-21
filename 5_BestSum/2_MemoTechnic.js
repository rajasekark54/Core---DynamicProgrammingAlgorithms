const bestSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombination = null;
  for (const num of numbers) {
    if (num <= target) {
      const reminder = target - num;
      const combination = bestSum(reminder, numbers, memo);
      if (combination !== null) {
        const combinationResult = [...combination, num];

        const cn = combinationResult.length;
        const sn = shortestCombination?.length;
        if (!shortestCombination || sn > cn) {
          shortestCombination = combinationResult;
        }
      }
    }
  }

  memo[target] = shortestCombination;
  // console.log(memo[target]);
  return memo[target];
};

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); //[25, 25, 25, 25]

//brute force
//Time complexity => O(n * m*m) we are m operation in line no 11 coping (will take time)
//Space complexity => O(m * m) height of the stack * shortestCombination
