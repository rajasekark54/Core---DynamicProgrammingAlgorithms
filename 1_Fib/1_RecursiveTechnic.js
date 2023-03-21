// Recursive

const fib = (n) => {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(6)); //8
console.log(fib(7)); //13
console.log(fib(8)); //21
// console.log(fib(50)); //12586269025

// Time Complexity = O(2^n); // Exponential
// Space Complexity = O(n);
