const greeting = 'hello'
const dateString = '2017-08-24T11:00:00'
const smallBracket = '()'

console.log(`greeting.replace('el', '') : ${greeting.replace('el', '')}`)
console.log(`dateString.replace('T',' ') : ${dateString.replace('T',' ')}`)
console.log(`smallBracket.replace('(','{').replace(')','}') : ${smallBracket.replace('(','{').replace(')','}')}`)