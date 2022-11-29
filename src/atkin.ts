//@ts-nocheck
import { getArgs } from "./utils";

const atkin = (limit: number): number[] => {
  const primes: number[] = [];

  // 2 and 3 are prime
  if (limit > 2) primes.push(2);
  if (limit > 3) primes.push(3);

  let isPrime = new Array();
  isPrime[limit+1] = 0;

  // init everything to false
  for (let i = 0; i <= limit; i++)
    isPrime[i] = false;

  for (let x = 1; x * x <= limit; x++) {
    for (let y = 1; y * y <= limit; y++) {
      
      // n = (4*x*x)+(y*y) has odd number of solutions
      let n = (4 * x * x) + (y * y);
      if (n <= limit && (n % 12 == 1 || n % 12 == 5)) 
        isPrime[n] ^= true;

      // n = (3*x*x)+(y*y) has odd number of
	  // solutions and n % 12 = 7
      n = (3 * x * x) + (y * y);
      if (n <= limit && n % 12 == 7) 
        isPrime[n] ^= true;

      // n = (3*x*x)-(y*y) has odd number of
      //  solutions, x > y and n % 12 = 11
      n = (3 * x * x) - (y * y);
      if (x > y && n <= limit && n % 12 == 11) 
        isPrime[n] ^= true;
    }
  }

    // Mark all multiples of squares as non-prime
	for (let r = 5; r * r <= limit; r++) {
		if (isPrime[r]) {
			for (let i = r * r; i <= limit; i += r * r)
                isPrime[i] = false;
		}
	}

    // get all primes
    for (let a = 5; a <= limit; a++)
		if (isPrime[a])
            primes.push(a);

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
let primes: number[] = atkin(max).filter(isMegaPrime);
console.log(primes);

console.timeEnd();

export {};
