//함수 선언식 
function printMessage(message) {
    console.log(message)
}

const printWelcome = function () {
    console.log("welcome")
}

printMessage('bye')
printWelcome()

console.log(`typeof printMessage : ${typeof printMessage}`)
console.log(`typeof printWelcome : ${typeof printWelcome}`)

const pm = printMessage;
pm('good morning')

console.log(`typeof pm : ${typeof pm}`)