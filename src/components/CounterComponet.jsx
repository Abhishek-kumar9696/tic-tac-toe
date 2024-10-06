import {React,useState} from 'react'

const CounterComponet = () => {
    const [count,setCount] = useState(0);
  return (
    <div>
      <p>Count component - {count} </p>
      <button onClick = {() => setCount(count+1)}>Increment</button>
      <span>       </span>
      <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>

  )
}

export default CounterComponet
