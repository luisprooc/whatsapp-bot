function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
const num = 5;
console.log(`The factorial of ${num} is: ${factorial(num)}`);