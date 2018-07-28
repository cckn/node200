const sum = (a,b) => a+b

const printResult = result => {
    console.log(`result is ${result}`)
}

const calculationAndPrint = (calculationResult, callback) =>{
    callback(calculationResult)
}

calculationAndPrint(sum(10,20), printResult)