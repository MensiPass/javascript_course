const post={
    id:1,
    title:'Pot One',
    body:'This is the body',
};

//convert to JSON string
const str=JSON.stringify(post);

console.log(str.id);

//parse JSON
const obj=JSON.parse(str);
console.log(obj.id);

//JSON & arrays
const posts=[
{
    id:1,
    title:'Post One',
    body:'Thi is the body',
},
{
    id:2,
    title:'Post two',
    body:'This is the body 2',
},
];
const str2=JSON.stringify(posts);

console.log(str2);