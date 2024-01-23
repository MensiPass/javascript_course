//value is stored in the stack
const name='John'
const age=30

//reference is stored in the heap

const person={
name:'Jane',
age:40
}

let newName = person.name;
newName='Jonathan'

let newPerson= person
newPerson.name='Joe'

console.log(name,newName) //John, Jonathan
console.log(person,newPerson) //{name:'Joe', age:40}, {name:'Joe', age:40}