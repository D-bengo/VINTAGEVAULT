import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCar, updateCar, deleteCar } from "../services/api";
import CommentSection from "../components/CommentSection";

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Ensure id is a number
    getCar(Number(id))
      .then((data) => {
        if (!data || Object.keys(data).length === 0) {
          setError("Car not found");
        } else {
          setCar(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch car:", err);
        setError("Failed to fetch car data");
        setLoading(false);
      });
  }, [id]);

  // Handle like increment
  const handleLike = () => {
    if (!car) return;
    const updatedCar = { ...car, likes: car.likes + 1 };
    updateCar(car.id, updatedCar)
      .then(() => setCar(updatedCar))
      .catch(() => setError("Failed to like car"));
  };

  // Handle marking car as sold
  const handleMarkSold = () => {
    if (!car) return;
    const updatedCar = { ...car, status: "sold" };
    updateCar(car.id, updatedCar)
      .then(() => setCar(updatedCar))
      .catch(() => setError("Failed to mark car as sold"));
  };

  // Handle deleting car
  const handleDelete = () => {
    if (!car) return;
    deleteCar(car.id)
      .then(() => navigate("/cars"))
      .catch(() => setError("Failed to delete car"));
  };

  if (loading) return <p>Loading car details...</p>;
  if (error) return <p>{error}</p>;
  if (!car) return <p>Car not found.</p>;

  return (
    <div className="container">
      <img src={car.image} alt={car.name} className="details-img" />
      <h2>{car.name}</h2>
      <p><strong>Year:</strong> {car.year}</p>
      <p><strong>Price:</strong> ${car.price}</p>
      <p><strong>Status:</strong> {car.status}</p>
      <p>{car.description}</p>
      <p>{car.story}</p>
      <p><strong>Likes:</strong> {car.likes}</p>

      <div style={{ margin: "1rem 0" }}>
        <button onClick={handleLike}>Like ❤️</button>
        {car.status !== "sold" && <button onClick={handleMarkSold}>Mark as Sold</button>}
        <button onClick={() => navigate(`/edit/${car.id}`)}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <CommentSection carId={car.id} />
    </div>
  );
}

export default CarDetails;