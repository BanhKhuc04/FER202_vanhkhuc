function SimpleWebsite({ logo }) {
  return (
    <div className="simple-website">
      <header className="website-header">
        <img src={logo} alt="FPT University" />

        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="website-main">
        <section>
          <h3>About</h3>
          <p>This is the about section of the website.</p>
        </section>

        <section>
          <h3>Contact</h3>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      <footer className="website-footer">
        <p>© 2026 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default SimpleWebsite;