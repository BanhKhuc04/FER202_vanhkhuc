function App() {
  const handleClick = () => {
    alert("Bạn vừa bấm nút");
  };

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
export default App;