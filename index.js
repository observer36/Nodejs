const r = 8;
const a = 3;
const b = 4;
const Pi = 3.141;

function area(r) {
    return Pi * r * r;
}

function hyp(a, b) {
    return Math.sqrt((a * a) + (b * b));
}
const res1 = area(r);
const res2 = hyp(a, b);


document.write ("Площа круга = ", res1,". ")
document.write ("Гіпотенуза трикутника = ", res2,". ")