import React from 'react'
import { useRef,useEffect } from 'react'
const DomRef = () => {
    const inputRef=useRef<HTMLInputElement>(null)

    useEffect(()=>{
        inputRef.current?.focus()
    },[])

  return (
    <div>
        <input type='text' ref={inputRef} ></input>
    </div>
  )
}

export default DomRef