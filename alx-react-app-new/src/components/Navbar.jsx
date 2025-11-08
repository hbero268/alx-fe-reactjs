import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      }}
    >
      <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "10px", color: "white" }}>About</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
