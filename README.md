# Programming test for Balfour Beatty by Georgi Petkov

The algorithm that I have chosen to solve the challenge is Sieve of Eratosthenes.
Below you can see a benchmark table of other algorithms tried.
The code for Sieve of Eratosthenes is in [src/eratosthenes.ts](https://github.com/bog-Ardidi/balfour-beatty-challenge/blob/main/src/eratosthenes.ts)

<br>

## Algorithms benchmark

Benchmark is calculated by taking the average of 10 runs.

| Algorithm                                | Number of entries |  Time to computer   |   Time complexity |
| :--------------------------------------- | :---------------: | :-----------------: | ----------------: |
| Sieve of Atkin                           |    100 000 000    |       18.571s       |              O(n) |
| Sieve of Erathosthenes                   |    100 000 000    |       11.928s       | O(n\*log(log(n))) |
| Primality test (Optimized School Method) |    100 000 000    | 2:24.984 (m:ss.mmm) |          O(n^3/2) |

<br>

## Running instructions

```
    1. Clone the project
    2. cd balfour-beatty-challenge
    3. npm install
    4. npx ts-node src/[fileName]
```

<br>

By default the program will run with 100 as the Max number.
You can pass command line arguments to change the Max number.
Only one argument and only unsigned integer are allowed.

<br>

```
    Example:
    npx ts-node src/eratosthenes.ts 500
```
