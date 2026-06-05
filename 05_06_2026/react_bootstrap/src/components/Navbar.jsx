function Navbar() {
  return (
    <nav className="navbar">
      <h2>Pizza House</h2>

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
    </nav>
  );
}

export default Navbar;