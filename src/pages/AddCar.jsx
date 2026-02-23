import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCar } from "../services/api";
import '../index.css';

function AddCar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    price: "",
    image: "",
    description: "",
    story: "",
    likes: 0,
    status: "available"
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createCar({
      ...formData,
      year: Number(formData.year),
      price: Number(formData.price)
    }).then(() => navigate("/cars"));
  };

  return (
    <div className="addcar-container">
      <h2>Add New Vintage Car</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Car Name" value={formData.name} onChange={handleChange} required />
        <input name="year" type="number" placeholder="Year" value={formData.year} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
        <textarea name="description" placeholder="Short Description" value={formData.description} onChange={handleChange} required />
        <textarea name="story" placeholder="Car Story / Cultural Impact" value={formData.story} onChange={handleChange} required />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddCar;