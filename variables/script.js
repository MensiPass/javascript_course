//how to declare variable
//var,let & const
let firstname='John'
const lastName='Doe'
let age=30

console.log(age);
//naming conventions
//only letters, numbers, underscores and dollar sign
//can't start with a number

//you can re-assign 'let' variables. If you change 'age' to use 'const' you will get error
age=31
console.log(age);
//with let, we can declare a value without assigning a value
let score
score=1
console.log(score);
if(true){
    score=score+1
}
console.log(score);

const x=100
//we cannot re-assign const variable
//x=200 will result in error

//we can manipulate arrays and objects using const
const arr=[1,2,3,4]
arr.push(5)
console.log(arr);

const person={
name:'John'
}
person.name='Jane'
person.email='em@gmail.com'
console.log(person);


//declare multiple values at once
let a,b,c
const d=10, e=20, f=30
console.log(d);
console.log(a);

