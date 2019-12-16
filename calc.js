function area(r) {
    return Math.PI * r * r;
}

function hyp(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

module.exports.area = area;
module.exports.hyp = hyp;
