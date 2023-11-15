// Anonymous function
(function (a, b, c) {
  return a + b +c;
})

// Function expression
const x = 1;
const sum = function (a, b) {
  return a + b;
}

const result = sum(7, 59);
console.log(result);

const anotherSum = sum;
console.log(anotherSum(5, 9));

x = sum;
console.log(x(11, 16));
