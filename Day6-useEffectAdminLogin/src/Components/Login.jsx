import React, { useEffect } from 'react'

const Login = ({handleLogin}) => {

  useEffect(()=>{
    return()=>{
        console.log("Component Unmount..");
    }
  },[])  
  
  return (
    <>
      <h2>Please Login</h2>
      <button type='button' onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login