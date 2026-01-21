import React, { useEffect, useState } from 'react'

const Login = ({handleLogin}) => {
    useEffect(() => {
        console.log("Login Component mount");
        
        return () => {
            console.log("Component unmount");
        }
    }, []);

    return (
        <>
            <h2>Welcome User..</h2>
            <button type='button' onClick={handleLogin}>Logout</button>
        </>
    )
}

export default Login
