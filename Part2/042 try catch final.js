const printHello = () =>{
    console.log("Hello")
}

try{
    printHello()
}catch (e) {
    console.error(e)
}finally {
    console.log('finally1')
}

try{
    printBye()
}catch (e) {
    console.error(e)
}finally {
    console.log('finally2')
}