let x;

const num=new Number(5);

//toString()- returns a string representation of the number
x=num.toString();
x=num.toString().length;

//toFixed()- returns a string represenntation of the number with a specified number of decimals
x=num.toFixed(2);

//toPrecision()- returns a number with the specified length

x=num.toPrecision(3);

//toExponential()- converts a number to exponential notation and returns its value as a string
x=num.toExponential(2);

//toLocaleString()- returns a string representation of a number, using the current locale

x=num.toLocaleString('en-US');

//valueOf()- get value

//the Number object itself has some properties and methods
//largest and smallest possible number

x=Number.MAX_VALUE;
x=Number.MIN_VALUE;

console.log(x);