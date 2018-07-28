const students = [
    {name: 'ds', age: 29, science: 90},
    {name: 'de', age: 24, science: 70},
    {name: 'qq', age: 22, science: 66},
]

function getDegree(score) {
    if (score >= 90) {
        return 'A'
    } else if (score >= 80) {
        return 'B'
    } else if (score >= 70) {
        return 'C'
    }
    return 'F'
}

students.forEach((student) => {
    const result = `name : ${student.name}, score : ${getDegree(student.science)}, `
    console.log(result)
})
