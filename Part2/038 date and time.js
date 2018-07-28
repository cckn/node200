const date = new Date(2017, 8, 3, 18, 20, 30)
console.log(`date : ${date.toLocaleString()}`)

console.log(`LocaleDateString : ${date.toLocaleDateString()}`)
console.log(`LocaleTimeString : ${date.toLocaleTimeString()}`)

console.log(`year : ${date.getFullYear()}`)
console.log(`month : ${date.getMonth() + 1}`)
console.log(`date : ${date.getDate()}`)
console.log(`hours : ${date.getHours()}`)
console.log(`minute : ${date.getMinutes()}`)
console.log(`seconds : ${date.getSeconds()}`)