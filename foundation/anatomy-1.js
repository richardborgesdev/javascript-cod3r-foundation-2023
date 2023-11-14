// Function declaration
function sayHello() {
  console.log('Hello!');
}

let x = sayHello();
console.log(x);

function sayHelloTo(name) {
  console.log(`Hello ${name}`);
}

sayHelloTo('Mike');
sayHelloTo();

function returnHi() {
  return 'Hi';
}

let greeting = returnHi();
console.log(greeting);

function returnHiTo(name) {
  return `Hello ${name}`;
}

returnHiTo('Mike');
returnHiTo();
