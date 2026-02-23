import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCar, updateCar } from "../services/api";

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(null);

  useEffect(() => {
    getCar(id).then(data => {
      setFormData(data);
    });
  }, [id]);

  if (!formData) return <p>Loading...</p>;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateCar(id, {
      ...formData,
      year: Number(formData.year),
      price: Number(formData.price)
    }).then(() => {
      navigate(`/cars/${id}`);
    });
  };

  return (
    <div className="container">
      <h2>Edit Car</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          name="year"
          type="number"
          value={formData.year}
          onChange={handleChange}
        />

        <input
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <textarea
          name="story"
          value={formData.story}
          onChange={handleChange}
        />

        <button type="submit">Update Car</button>
      </form>
    </div>
  );
}

export default EditCar;