import React from 'react'
import { FaTimes } from 'react-icons/fa'


const StudentsList = ({ list, onDelete }) => {
    return (
        <div>
            {list.map((student) =>
                <div key={id} className='student'>
                    <h3>{student.name}  {student.lastName} 
                    <FaTimes style={iconStyles} onClick={() => onDelete(student.id)} /></h3>
                </div>)}
        </div>
    )
}

const iconStyles = {
    color: 'red',
    cursor: 'pointer',
}

export default StudentsList
