import React from 'react'
type ButtonProps={
    // handleClick:()=>void
    // When you need the event passed in to the click handler
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number  )=>void
}


const Button = (props:ButtonProps) => {
  return (
    <div>
        <button onClick={event=>props.handleClick(event,1)}  >Click</button>

    </div>
  )
}

export default Button