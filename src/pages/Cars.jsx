import { useEffect, useState } from "react";
import { getCars } from "../services/api";
import CarCard from "../components/CarCard";

function Cars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCars().then(data => { setCars(data); setLoading(false); });
  }, []);

  if (loading) return <p>Loading cars...</p>;

  return (
    <div className="cars-container">
      <h2>Vintage Cars</h2>
      <div className="grid">
        {cars.map(car => <CarCard key={car.id} car={car} />)}
      </div>
    </div>
  );
}

export default Cars;