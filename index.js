const valr = 8;
const vala = 3;
const valb = 4;
const Pi = 3.141;

function area(r) {
    return Pi * r * r;
}

function hyp(a, b) {
    return Math.sqrt((a * a) + (b * b));
}
const res1 = area(valr);
const res2 = hyp(vala, valb);


document.write ("Площа круга = ", res1,". ")
document.write ("Гіпотенуза трикутника = ", res2,". ")