const canSum = (target, numbers) => {
  const table = Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      for (const num of numbers) {
        if (i + num <= target) table[i + num] = true;
      }
    }
  }

  return table[target];
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(7, [2, 3, 5])); // true
console.log(canSum(7, [7, 14])); // true
