const studentList = [
    {name: 'Ds', age: 29, science: 85},
    {name: 'De', age: 28, science: 60},
    {name: 'Dd', age: 22, science: 55},
    {name: 'ee', age: 23, science: 70},
    {name: 'qq', age: 24, science: 100}
];

let resultStudent = '';

for (let index = 0; index < studentList.length; index++) {
    if (studentList[index].name === 'ee'){
        resultStudent = studentList[index];
        break
    }
    console.log(`${studentList[index].name}은 ee가 아닙니다. `)
}

console.log(`resultStudent = ${resultStudent.name}`)