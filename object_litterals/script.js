let x;

//creating an object
const person={
    name:'John Doe',
    age:30,
    isAdmin:true,
    address:{
        street:'123 Main st',
        city:'Boston',
        state:'MA'
    },
    hobbies:['music','sports'],
};

//sccessing object properties
x=person.name; //dot notation
x=person['age']; //bracket notation
x=person.address.state;
x=person.hobbies[0];

//updating properties

person.name='Jane Doe';
person['isAdmin']=false;

//deletig properties
delete person.age;

//create new properties
person.hasChildren=true;

//add functions
person.greet=function(){
    console.log('Hello, my name is ${this.name');
};
person.greet();
//keys with multiple words
const person2={
    'first name':'Brad',
    'last name':'Jackson',
};
x=person2['first name'];
console.log(x);