const order1 = {no :1 , productName : '티셔츠', price : '30000'}
const order2 = {no :2 , productName : '청바지', price : '45000'}
const order3 = {no :3 , productName : '신발', price : '55.70'}
const order4 = {no :4 , productName : '선글라스', price : '120.80'}

console.log(`order1.price + order2.price : ${order1.price + order2.price}`)
console.log(`parseInt(order1.price) + parseInt(order2.price) : ${parseInt(order1.price) + parseInt(order2.price)}`)
console.log(`parseInt(order3.price) + parseInt(order4.price) : ${parseInt(order3.price) + parseInt(order4.price)}`)
console.log(`Number(order3.price) + Number(order4.price) : ${Number(order3.price) + Number(order4.price)}`)
