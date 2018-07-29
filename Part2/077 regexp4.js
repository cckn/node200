const string = '(<h1>::: 특별가 - 99,000원:::</h1>)';

const replacedBracket = string.replace(/[()]/g,"");
const replacedBracketOrSlachHyphenComma = string.replace(/[()/\-,]/g,'');

console.log(replacedBracket)
console.log(replacedBracketOrSlachHyphenComma)
