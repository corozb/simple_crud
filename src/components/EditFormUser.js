import React, { useState, useEffect } from 'react'

const EditFormUser = ({ setEditing, currentUser, updateUser }) => {
  const [user, setUser] = useState(currentUser)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(user.id, user)
  }

  useEffect(() => {
    setUser(currentUser)
  }, [currentUser])

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
      <button>Update user</button>
      <button onClick={() => setEditing(false)} className='button muted-button'>
        Cancel
      </button>
    </form>
  )
}

export default EditFormUser
