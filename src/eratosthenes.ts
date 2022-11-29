import { getArgs } from "./utils";

// Sieve of Eratosthenes Algorithm
const eratosthenes = (n: number): number[] => {
  let isPrime: Array<boolean> = Array.from({ length: n + 1 }, (_, i) => true);

  for (let p = 2; p * p <= n; p++) {
    // if entry in the array is true we assume it is prime
    // and update all multiples of it
    if (isPrime[p] == true) {
      for (let i = p * p; i <= n; i += p) {
        isPrime[i] = false;
      }
    }
  }

  const primes: number[] = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime[i] === true) primes.push(i);
  }

  return primes;
};

// goes through every digit in the number and checks if it is prime
const isMegaPrime = (n: number) : boolean => {
  while (n > 0) {
    let reminder = n % 10;

    if (!(reminder === 2 || reminder === 3 || reminder === 5 || reminder === 7))
      return false;

    n = Math.floor(n / 10);
  }

  return true;
};

console.time();

let max: number = getArgs();

let primes: number[] = eratosthenes(max).filter(isMegaPrime);
console.log(primes);

console.timeEnd();

export {};
