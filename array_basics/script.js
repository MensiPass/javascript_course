let x;

//Array literal
const numbers=[12,45,29,39,102];
const mixed=[12,'Hello',true,null];

//array constructor
const fruits=new Array ('apple', 'grape', 'orange');

//get value by index
x=numbers[0];

x=numbers[0]+ numbers[3];

x='My favorite fruit is an ${fruits[2]}';

x=numbers.length;
fruits[2]='pear';

//length is not read-only
//fruits.length=2;
fruits[3]='strawberry';

//using the length as the index will always add on the end
fruits[fruits.length]='blueberry';
fruits[fruits.length]='peach';

x=fruits;

console.log(x);