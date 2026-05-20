import { useState } from 'react'

function NameInput() {
  const [name, setName] = useState('')

  function handleNameChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <h2>Name Input</h2>

      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={handleNameChange}
      />

      <p>Tên bạn vừa nhập là: {name}</p>
    </div>
  )
}

export default NameInput