const isNaN123 = isNaN(123)
const isNaNMinus123 = isNaN(-123)
const isNaN234 = isNaN('234')
const isNaNHello = isNaN('hello')

console.log(isNaN123)
console.log(isNaNMinus123)
console.log(isNaN234)
console.log(isNaNHello)

// isNaN :: is Not a Number - 숫자가 아닐 때 return true