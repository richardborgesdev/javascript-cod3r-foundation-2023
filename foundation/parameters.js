function logParams(a, b, c) {
  console.log(a, b, c);
}

logParams(1, 2, 3);
logParams(1, 2, 3, 4, 5);

let x = logParams(1, 2);
console.log();(x);

logParams(1);
logParams();

function defaultParams(a = 1, b = 2, c = 3) {
  console.log(a, b, c);
}
defaultParams(7, 8, 9);
defaultParams(7, 8);
defaultParams(7);
defaultParams();

// spread/rest
function logNums(...nums) {
  console.log(Array.isArray(nums));

  for (const n of nums) {
    console.log(n);
  }
}

logNums(1, 2, 3, 4, 5, 6);

function sumAll(...nums) {
  let total = 0;

  for (const n of nums) {
    total += n;
  }

  console.log(total);
}
