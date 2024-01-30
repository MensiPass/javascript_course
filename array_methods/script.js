let x;

const arr=[28,38,44,29,109];

//push()- push value on the end of the array

arr.push(100);

//pop()- get the last value of the array

arr.pop();

//unshift()- add a value to the beginning of the array

arr.unshift(99);

//shift()- remove first value

arr.shift();

//reverse()- reverse an array
arr.reverse();

//indcludes()- check if something is in the arrray

x=arr.includes(445);

//indexof()- returns the index of the first match or specified value
x=arr.indexOf(28);
//return array as a string

x=arr.toString();
x=arr.join();

//slice()- returns selected elements in an array, as a new array. Slice takes in the index of the first elemet and the index of the last element to be included in the ew array
x=arr.slice(1,4);

//splice()- works like a slice() except it takes the index of the first element and the number of elements after that as a second argument. It also mutates the original array where slice() does not
x=arr.splice(1,4);

//remove a single element/value- the following will mutate the original aray by taking out the elelment with the index of 4. x will be equal to a new array with the plucked out value
x=arr.splice(4,1);


//chaining methods- some methods can be chained depending on the return value

x=arr.slice(1,4).reverse().toString().charAt(0);

console.log(x);
