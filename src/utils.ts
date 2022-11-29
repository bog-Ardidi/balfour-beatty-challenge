/**
 *  This file contains utility functions that help test the 
 *  algorithms easily.
 */

const MAX_UINT32 = 4294967295;

const uint32 = (number: number) => {
  if (!Number.isNaN(number) && 0 <= number && MAX_UINT32 >= number && number % 1 === 0) {
    return number >>> 0;
  }
  return NaN;
}

// checks if the input number is unsinged integer
const isUint = (number: number) => {
    if(!uint32(number)){
        console.log("Only unsigned integers allowed");
        process.exit(1);
    }

    return number;
}

// default max is no args are passed
const DEFAUL_MAX = 100;

// get command line args
export const getArgs = () => {
    const args = process.argv.slice(2);
    
    if(args.length === 0)
        return DEFAUL_MAX;

    if(args.length > 1) {
        console.log("Only 1 command line argument allowed!");
        process.exit(1);
    }

    return isUint(parseInt(args[0]));
}
