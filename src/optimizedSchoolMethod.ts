import { getArgs } from './utils';

// checks if number is prime using Optimized School Method
function isPrime(num: number) : boolean
{
	if (num <= 1)
		return false;

	for(let i = 2; i * i <= num; i++)
	
		// If a divisor of n exists
		if (num % i == 0)
			return false;
			
	return true;
}

// goes through every digit in the number and checks if it is prime
const isMegaPrime = (n: number) : boolean => {
	if (!isPrime(n))
		return false;

	else
	{
		while (n > 0) {
		let reminder = n % 10;
	
		if (!(reminder === 2 || reminder === 3 || reminder === 5 || reminder === 7))
			return false;
	
		n = Math.floor(n / 10);
    	}
	}
  
    return true;
};

const getMegaPrimes = (max: number) : number[] => {
    let megaPrimes: number[] = [];

    for(let i = 1; i <= max; i++)
	{
		if (isMegaPrime(i))
			megaPrimes.push(i);
	}

    return megaPrimes;
}


console.time();

let max: number = getArgs();
let primes: number[] = getMegaPrimes(max).filter(isMegaPrime);
console.log(primes);

console.timeEnd();

export {};
