import React from 'react'
import { Name } from './Person.types'
type PersonListprops={
   name:Name[]
}
//Arrys can be written like this, type PersonListProps={}[]


const PersonList = (props:PersonListprops) => {
  return (
    <div>
        {/* <h2>Bruce Wayne</h2>
        <h2>Clark Kent</h2>
        <h2>Princess Diana</h2> */}
        {props.name.map((name)=>{
            return(
                <h2 key={name.first}>{name.first}</h2> 
            )
        })}
    </div>
  )
}

export default PersonList