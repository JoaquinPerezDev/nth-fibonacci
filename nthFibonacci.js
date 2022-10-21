// The fibonacci sequence is defined as follows: The first number of the sequence is
// 0, the second is 1, and the nth number is the sum of the (n-1)th and (n-2)th
// numbers. Write a function that takes in an integer and returns the nth fibonacci
// number.

// Important note: The Fibonacci sequence is often definited with its first two
// numbers as *F0 = 0* and *F1 = 1*. For the purpose of this question, the first
// Fibonacci number is *F0*; therefore, *getNthFib(1) is equal to *F0*,
// getNthFib(2) is equal to *F1*, etc.

// Sample input:   n = 6;
// Sample output:  5 (0, 1, 1, 2, 3, 5)

//O(n) time | O(1) space complexity

// function nthFib(n) {
//   let fibArr = [0, 1];

//   for(let i = 2; i < n; i++) {
//     fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
//   }
//   return fibArr[n - 1];
// }

function getNthFib(n) {
  let memo = {};

  return fibHelper(n - 1, memo);
}

function fibHelper(n, memo) {
  if (n <= 0) return 0;
  if (n == 1) return 1;

  if (memo[n]) return memo[n];

  memo[n] = fibHelper(n - 1, memo) + fibHelper(n - 2, memo);
  return memo[n];
}
