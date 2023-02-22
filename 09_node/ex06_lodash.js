const _ = require('lodash')

const students = [
    {
        name: 'Juliana',
        grade: 10
    },
    {
        name: 'John',
        grade: 7.6
    },
    {
        name: 'Petter',
        grade: 8.1
    },
]

const average = _.sumBy(students, 'grade') / students.length

console.log(average)