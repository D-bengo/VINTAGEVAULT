const BASE_URL = "http://localhost:6001";

export const getCars = async () => fetch(`${BASE_URL}/cars`).then(res => res.json());
export const getCar = async (id) => {
  const res = await fetch(`${BASE_URL}/cars/${id}`);
  if (!res.ok) throw new Error("Car not found");
  return res.json();
};
export const createCar = async (car) =>
  fetch(`${BASE_URL}/cars`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car)
  });
export const updateCar = async (id, car) =>
  fetch(`${BASE_URL}/cars/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(car)
  });
export const deleteCar = async (id) =>
  fetch(`${BASE_URL}/cars/${id}`, { method: "DELETE" });

export const getComments = async (carId) =>
  fetch(`${BASE_URL}/comments?carId=${carId}`).then(res => res.json());
export const addComment = async (comment) =>
  fetch(`${BASE_URL}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(comment)
  });
export const deleteComment = async (id) =>
  fetch(`${BASE_URL}/comments/${id}`, { method: "DELETE" });