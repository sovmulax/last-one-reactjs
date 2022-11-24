const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React App</h1>
      <div className="link">
        <a href="/">Home</a>
        <a
          href="/"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Store
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
