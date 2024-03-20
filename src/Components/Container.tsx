import React from 'react'
type ContainerProps={
    styles: React.CSSProperties
}


const Container = (props:ContainerProps) => {
  return (
    // <div style={{border:'1px solid black',padding:'1rem'}} >Text goes here</div>
    <div style={props.styles}  ></div>
  )
}

export default Container