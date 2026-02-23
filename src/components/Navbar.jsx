import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>VintageVault</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/add">Add Car</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;