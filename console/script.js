//log number
console.log(100)
 //log string
 console.log('Hello world string')

 //log multiple values
 console.log(10,'Hello multiple times',true)

 //log a variable
 const x=100;
console.lof(x)

//console error & warning
console.error('Alert')
console.warn('Warning')

//log object as table
console.table({name:'Mensi', email:'mensipass@gmail.com'}) 

//group cosole commands
console.group('Simple')
console.log(x)
console.erroe('Alert')
console.warn('Warning')
console.groupEnd()


//add css to logs

const styles='padding:10px; background-color:white; color:green'
console.log('%cHello world', styles)
