import axios from "axios";

const http = axios.create({
  baseURL: "http://34.117.217.185/pet-onboarding",
  // baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
  },
});

const getAllPets = () => {
  return http.get(`/pet`);
};
const searchPets = (data: any) => {
  return http.post(`/pet/search`, data);
};

const getAllLocations = () => {
  return http.get(`/location`);
};
const getPet = (id: any) => {
  return http.get(`/pet/${id}`);
};

const create = (data: any) => {
  return http.post(`/pets`, data);
};

const update = (id: any, data: any) => {
  return http.put(`/pets/${id}`, data);
};

const remove = (id: any) => {
  return http.delete(`/pets/${id}`);
};

const removeAll = () => {
  return http.delete(`/pets`);
};

const findByFirstName = (firstName: any) => {
  return http.get(`/pets?firstName=${firstName}`);
};

const Service = {
  getAllPets,
  getAllLocations,
  searchPets,
  getPet,
  create,
  update,
  remove,
  removeAll,
  findByFirstName: findByFirstName,
};

export default Service;
