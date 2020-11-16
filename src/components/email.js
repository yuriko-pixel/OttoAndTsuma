import React, {useState} from 'react'

const emailContent = ({email, func}) => {
  return (
    <div>
        <h1>{email.subject}</h1>
        <p>To: {email.to}</p>
        <p>From: {email.from}</p>
        <p>Date: {email.date}</p>
        <p>Content</p>
        <button onClick={() => func(false)}>Back</button>
    </div>
  )
}

export default emailContent