const r = 8;
const a = 3;
const b = 4;
const calc = require('./calc');

const res1 = calc.area(r);
const res2 = calc.hyp(a, b);


document.getElementById("result1").innerHTML=res1;
document.getElementById("result2").innerHTML=res2;