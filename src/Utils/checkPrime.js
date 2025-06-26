function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  if (num <= 3) {
    return true; // 2 and 3 are prime
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false; // Exclude multiples of 2 and 3
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false; // Check for divisibility by numbers of the form 6k +/- 1
    }
  }
  return true; // If no divisors are found, it's prime
}

 export default function findNthPrime(n) {
  if (n < 1) {
    throw new Error("There is no zeroth or negative prime number.");
  }

  let count = 0;
  let num = 1; // Start checking from 1

  while (count < n) {
    num++; // Increment to the next number
    if (isPrime(num)) {
      count++; // If it's prime, increment the prime count
    }
  }
  return num; // Return the nth prime number found
}
