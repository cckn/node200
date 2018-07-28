const score = 60
let degree = '';

if (score >= 90) {
    degree = 'A'
}else if (score >= 80) {
    degree = 'B'
}else if (score >= 70) {
    degree = 'C'
}else {
    degree = 'F'
}

console.log(`degree : ${degree}`)