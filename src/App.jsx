import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetails />} />
          <Route path="/add" element={<AddCar />} />
          <Route path="/edit/:id" element={<EditCar />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div className="container"><h2>404 - Page Not Found</h2></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;