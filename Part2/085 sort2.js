const students = [
    {name: 'ds', age: 22, science: 90, math: 40},
    {name: 'de', age: 22, science: 70, math: 100},
    {name: 'qq', age: 22, science: 66, math: 70},
]


students.sort((before, next) => {
    if (before.age > next.age) return 1
    else if (before.age < next.age) return -1
    else if (before.math > next.math) return -1
    else if (before.math < next.math) return 1
    return 0
})

console.log(students)
