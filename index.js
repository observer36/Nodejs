let r=8; 
let a=3, b=4
const calc = require('./calc')

const res1 = calc.area(r)
const res2 = calc.hyp(a,b)

console.log(`Circle square: ${res1}`)
console.log(`Triangle hypotenuse: ${res2}`)