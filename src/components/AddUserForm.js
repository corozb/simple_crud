import React, { useState } from 'react'

const AddUserForm = ({ addUser, initialFormState }) => {
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // if the input is empty stop function
    if (!user.name || !user.username) return

    addUser(user)
    setUser(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type='text'
        name='username'
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  )
}

export default AddUserForm
