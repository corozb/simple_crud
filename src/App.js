import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditFormUser from './components/EditFormUser'
import './App.css'

const usersData = [
  { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
  { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
  { id: uuidv4(), name: 'Ben', username: 'benisphere' },
]

const initialFormState = {
  id: null,
  name: '',
  username: '',
}

function App() {
  const [users, setUsers] = useState(usersData)
  const [editing, setEditing] = useState(false)
  const [currentUser, setCurrentUser] = useState(initialFormState)

  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  const editUser = (user) => {
    console.log(user)
    setEditing(true)
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    })
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
  }

  return (
    <div className='container'>
      <h1>CRUD App with Hooks</h1>
      <div className='flex-row'>
        {editing ? (
          <div className='flex-large'>
            <h2>Edit User</h2>
            <EditFormUser
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </div>
        ) : (
          <div className='flex-large'>
            <h2>Add User</h2>
            <AddUserForm
              addUser={addUser}
              initialFormState={initialFormState}
            />
          </div>
        )}
        <div className='flex-large'>
          <h2>View Users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  )
}

export default App
