import { Link } from "react-router-dom";
import '../index.css'; // make sure the CSS file with .home-container is imported

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to VintageVault</h1>
      <p>Discover legendary vintage cars that shaped history and culture.</p>
      <Link to="/cars">
        <button>Explore Cars</button>
      </Link>
    </div>
  );
}

export default Home;