const x=Math.floor(Math.random()*100+1);
const y=Math.floor(Math.random()*50+1);

//get the sum
const sum=x+y;
const sumOutput='${x}+ ${y}= ${sum}';

console.log(sumOutput);

//get the differece
const diff=x-y;
const diffOutput='${x}- ${y}= ${diff}';
console.log(diffOutput);

//get the product
const prod=x*y;
const prodOutput='${x}*${y}= ${prod}';
console.log(prodOutput);

//get the quotient
const q=x/y;
const qOutput='${x}/${y}= ${q}';
console.log(qOutput);

//get remainder
const rem=x%y;
const remOutput='${x}%${y}= ${rem}';
console.log(remOutput);