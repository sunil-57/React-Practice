import React from 'react'

function Person({person}) {
    return (
        <div>
            <h3>I am {person.name}.</h3>
            <h3>I am {person.age} old.</h3>
            <h3>I am good at {person.skill}.</h3>
        </div>
    )
}

export default Person
