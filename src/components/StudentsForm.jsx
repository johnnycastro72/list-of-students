import React, { useState } from 'react'
import StudentsList from './StudentsList';

const StudentsForm = () => {

  const [id, setId] = useState(0);
  const [list, setList] = useState([]);

  // Id Increments
  const addToId = () => {
    setId(id + 1);
  };

  // Delete Student
  const onAddStudent = (event) => {
    event.preventDefault();
    if (name && lastName) {
      const student = {
        id,
        name,
        lastName
      }
      setList([...list, student])
      addToId()
      event.reset()
    }
  }

  // Delete Student
  const deleteStudent = (id) => {
    setList(list.filter((student) => student.id !== id));
  };

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const addName = (event) => {
    setName(event.target.value)
  }

  const addLastName = (event) => {
    setLastName(event.target.value)
  }


  return (
    <div>
      <form>
        <label>Name </label>
        <input onChange={addName} type="text" name="name" />
        <label> Last name </label>
        <input onChange={addLastName} type="text" name="lastName" />
        <button className='btn' onClick={onAddStudent}>add student</button>
        <StudentsList list = { list } onDelete = {deleteStudent} id = {id} />
      </form>
    </div>
  )
}

export default StudentsForm
