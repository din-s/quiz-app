import React from 'react'

const Note = ({ title, description, createdAt }) => (
    <div>
        <h3>{title}</h3>
        <p>Description: <em>{description}</em></p>
        <p>CreatedAt : {createdAt}</p>
    </div>
)

export default Note