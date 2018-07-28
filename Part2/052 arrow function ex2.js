const students = [
    {name: 'ds', age: 29, science: 90,math : 40},
    {name: 'de', age: 24, science: 70,math : 100},
    {name: 'qq', age: 22, science: 66, math:70},
]

const plus = (a,b)=>a+b
students.forEach(student => {
    console.log(`${student.name} total: ${plus(student.science, student.math)}`)
})

