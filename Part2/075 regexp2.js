const string = '<h1> 특별가 - </h1> <h2>99,000원 </h2>';
console.log(`string  : ${string}`)

const result1 = string.replace(/<..>/g, '');
console.log(`result1 : ${result1}` );

const result2 = string.replace(/<.../g,'');
console.log(`result2 : ${result2}`);