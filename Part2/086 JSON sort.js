const students = [
    {name: 'ds', age: 22, science: 90, math: 40},
    {name: 'de', age: 23, science: 70, math: 100},
    {name: 'qq', age: 22, science: 66, math: 70},
    {name: 'ww', age: 29, science: 20, math: 33},
    {name: 'xx', age: 31, science: 33, math: 12},
    {name: 'pp', age: 44, science: 65, math: 77},
]

students.sort((now, next) => now.math - next.math);
console.log(`students : `,students)

const compare = (now, next) =>{
    console.log('-------------')
    console.log(`now : `,now)
    console.log(`next: `,next)
}
students.sort(compare);