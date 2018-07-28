const studentList = [
    {name: 'Ds', age: 29, science: 85},
    {name: 'De', age: 28, science: 60},
    {name: 'Dd', age: 22, science: 55},
    {name: 'ee', age: 23, science: 70},
    {name: 'qq', age: 24, science: 100}
];
studentList.forEach(function (user) {
    console.log(user)
})

console.log('----------------')

studentList.forEach(user => console.log(user))