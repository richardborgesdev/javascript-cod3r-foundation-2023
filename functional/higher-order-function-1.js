/*
  Functions that operate on other functions, either by taking them as arguments or by returning
  them, are called higher-order functions.
*/

function run(fn) {
  return `result ${fn()}`;
}

function sayHello() {
  console.log(('Hello!!'));
}

run(sayHello);
run(function (params) {
  console.log('run!!');
})

run(Math.random());
