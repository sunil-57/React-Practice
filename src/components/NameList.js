import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        { 
            id: 1,
            name: 'Bruce',
            age: 24,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Diana',
            age: 27,
            skill: 'JAVA'
        },
        {
            id: 3,
            name: 'Clark',
            age: 29,
            skill: 'UI/UX'
        }]
    const personList = persons.map(person=> <Person key={person.id} person={person}/>)
    return <div>{personList}</div>

}

export default NameList
