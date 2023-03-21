const sum = (arr) => {
  if (arr.length === 0) return 0;
  const rest = arr.slice(1);
  return arr[0] + sum(rest);
};

console.log(sum([1, 2, 3, 4]));
//time complexity => O(n * n);
//Space complexity => O(n)

//2nd version
const sum1 = (arr) => {
  return _sum(arr, 0);
};

const _sum = (arr, idx) => {
  if (idx === arr.length) return 0;

  return arr[idx] + _sum(arr, idx + 1);
};
console.log(sum1([1, 2, 3, 4]));
//time complexity => O(n);
//Space complexity => O(n)

// 3rd version
const sum2 = (arr, idx = 0) => {
  if (idx === arr.length) return 0;

  return arr[idx] + sum2(arr, idx + 1);
};
console.log(sum2([1, 2, 3, 4]));
//time complexity => O(n);
//Space complexity => O(n)
