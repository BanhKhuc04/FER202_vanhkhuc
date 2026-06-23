import React from 'react';
import './App.css';
function App(){
  const [isDark, setIsDark] = usaSate(false);
  function handleToggleDarkMode(){
    setIsDark(!isDark);
  }
  return(
    <div>
      <h1>React Hooks Demo</h1>
    </div>
  )
}
export default App;