import React from 'react'
import Button from './Components/Button';
import Childrean from './Components/Childrean';

const App = () => {
  // let count = 0;
  const [count, setCount] = React.useState(0);

  /*const handleIncrement = () => {
    // count += 1;
    setCount(count+1);
    console.log(count);
  } */

  /*const handleIncrement = () => {
    // count += 1;
    setCount(count+1);  
  }*/

  // console.log(count);
  console.log("Render..");
  return (
    <>
      <h2>Hello</h2>
      <h2>Count : {count}</h2>
      {/* <button onClick={handleIncrement}>Increment</button> */}
      {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
      <Button onclick={() => setCount(count + 1)}>Increment</Button>
      <Button onclick={() => setCount(count - 1)}>Decrement</Button>
      <hr />
      <Childrean name="Pooja" age="32" />
    </>
  )
}

export default App
