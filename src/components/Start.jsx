import React, { useState } from 'react'

function Start({setUsername}) {
    const [name, setName] = useState('')
    const handleChange = (e)=>{
      setName(e.target.value)
    }

    const submit = (e)=>{
        e.preventDefault()
        setUsername(name)
    }

    return (
        <div className='startBox'>
            <input type="text" placeholder='Enter your name here' onChange={handleChange} />
            <button onClick={submit} className='start-btn'>Start</button>
        </div>
    )
}

export default Start
