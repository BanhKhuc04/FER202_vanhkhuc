import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleDecrease() {
    setCount(count - 1)
  }

  function handleReset() {
    setCount(0)
  }

  function handleIncreaseByFive() {
    setCount(count + 5)
  }

  return (
    <div>
      <h2>Counter</h2>

      <p>Current count: {count}</p>

      <button onClick={handleIncrease}>Increase</button>

      <button onClick={handleDecrease}>Decrease</button>

      <button onClick={handleReset}>Reset</button>

      <button onClick={handleIncreaseByFive}>Increase by 5</button>

    </div>
  )
}

export default Counter