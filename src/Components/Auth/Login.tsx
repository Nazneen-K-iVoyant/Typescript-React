import React from 'react'
import Private from './Private'
import Profile from './Profile'

function Login() {
  return (
    <div>Please login to Continue 
        <Private isLoggedIn={true} Component={Profile}/>
    </div>
  )
}

export default Login