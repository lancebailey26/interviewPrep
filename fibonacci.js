//Fibonacci Sequence
// Print out the n-th entry in the fibonacci series.
function fib(n) {
    //first 2 are 1 & 2
    if (n < 2) {
      return n;
    }
    //returns character slot rather than actual math
    return fib(n - 1) + fib(n - 2);
  }