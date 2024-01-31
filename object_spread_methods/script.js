let x;

//create object using object constructor
const todo=new Object();
todo.id=1;
todo.name='By Milk';
todo.complete=false;

x=todo;

//object nesting
const person={
    address:{
        coords:{
            lat:42.9384,
            lng:-71.3232,
        },
    },
};
x=person.address.coords.lat;

const obj1={a:1,b:2};
const obj2={c:3,d:4};

//spread operator
const obj3={...obj1,...obj2};

//array of objects
const todos=[
    {id:1,name:'Buy milk'},
    {id:2, name:'Pickup kids from school'},
    {id:3, name:'Take out trash'},
];
x=todos[0].name;

//get array of object keys
x=Object.keys(todo);

//het length of an object
x=Object.keys(todo).length;

//get array of object values
x=Object.values(todo);

//get array of object key/value pair
x=Object.entries(todo);

//check if object has a property
x=todo.hasOwnProperty('age');
console.log(x);