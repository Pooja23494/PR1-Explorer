import React, { useEffect } from 'react'
import Login from './Components/Login';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [isLogin, setIsLogin] = React.useState(false);

  useEffect(() => {
    console.log("Component mount");
  }, []);

  useEffect(() => {
    console.log("Component update");
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <button type='button' onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <hr/>
      {!isLogin ? (<button type='button' onClick={() => setIsLogin(true)}>Login</button>) : (<Login handleLogin={() => setIsLogin(false)} />)}
    </>
  )
}

export default App
