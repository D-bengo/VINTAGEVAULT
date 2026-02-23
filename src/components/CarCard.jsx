import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>${car.price}</p>
      <p>Status: {car.status}</p>
      <Link to={`/cars/${car.id}`}>View</Link>
    </div>
  );
}

export default CarCard;