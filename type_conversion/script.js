let amount='hello'

//convert string to number

amount=parseInt(amount)
amount=+amount
amount=Number(amount)

//convert number to string

amount=amount.toString()
amount=String(amount)

//convert string to decimal

amount=parseFloat(amount)

//convert number to boolean

amount=Boolean(amount)

//ways to get NaN

console.log(Math.sqrt(-1))
console.log(1+NaN)
console.log(undefined+undefined)
console.log('foo'/3)

console.log(amount,typeof amount)