let x;

const fruits=['apple','pear','orange'];
const berries=['strawberry','blueberry','rasberry'];

//nesting arrays
// nesting berries inside of fruits

fruits.push(berries);

//now we can access 'blueberry' with the following
x=fruits[3][1];

//create a new variable and nest both arrays
const allFruits=[fruits,berries];

x=allFruits[1][2];

//concat()- concatenate arrays

x=[...fruits,...berries];

//flat()-flattten an array
const arr=[1,2,[3,4,5],6,[7,8]];

x=arr.flat();

//static methods of array object

//isArray()- check is is an array
x=Aray.from('12345');

//of()- create array from a set of values
const a=1;
const b=2;
const c=3;

x=Array.of(a,b,c);

console.log(x);