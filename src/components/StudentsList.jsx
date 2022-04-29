import React from 'react'

const StudentsList = ({ list }) => {
    return (
        <div>
            {list.map((student, index) =>
                <div key={index}>
                    <h2>{student.name}</h2>
                    <h2>{student.lastName}</h2>
                </div>)}
        </div>
    )
}

export default StudentsList
