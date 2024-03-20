import React from 'react'

type InputProp={
    value:string
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

// const Input = (props:InputProp) => {

  const Input = ({value,handleChange}:InputProp) => {
  return (
    <div>
        {/* <input type='text' value={props.value}  onChange={props.handleChange}/> */
        <input type='text' value={value}  onChange={handleChange}/>}
    </div>

  )
}

export default Input