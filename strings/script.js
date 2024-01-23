let x;
const name='John';
const age=31;

//concatenation
x='Hello, my name is '+ name +' and I am '+ age +' years old';

//template literals
x='Hello, my name is ${name} and I am ${age} years old';

//string properties and methods

// creating a "string object" (JS does this automatically when using a property or method on a primitive sting)

const s=new String('Hello world');

x=typeof s;
x=s.length;

//access value by key
x=s[0];

//shows the property of the string object. Shows the properties and methods

x=s._proto_;

//change case
x=s.toUpperCase();
x=s.toLowerCase();

//charAt() -returns the character at the specified index
x=s.charAt(0);

//indexOf - returns the index of the firs occurence of a specified value in a string

x=s.indexOf('d');

//substring()- search a string for a specified value
x=s.substring(2,5);
x=s.substring(7);

//slice()- extracts a part of a stirng ad returns a new string
x=s.slice(-11,-6);

//trim()- remove whitespace fom beginning and end of string
x='    Hello World';
x=x.trim();

//replace()- replace all instances of a string
x=s.replace('World','John');

//includes()- returs true if the sting is found
x=s.includes('Hell');

//valueOff()- returns the primitive value of a variable
x=s.valueOff();

//split()- returns an array of strings

x=s.split();
console.log(x);