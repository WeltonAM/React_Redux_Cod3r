import React from 'react'
import students from '../../data/students'

const StudentList = () => {
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {students && students.map((student) => (
                    <li key={student.id}>
                        {student.id}) {student.name} - {student.grade}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StudentList