import axios from "axios";

const http = axios.create({
  baseURL: "http://34.117.217.185/pet-onboarding",
  headers: {
    "Content-type": "application/json",
  },
});

const getAll = () => {
  return http.get(`/pet`);
};

const get = (id: any) => {
  return http.get(`/pets/${id}`);
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
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByFirstName: findByFirstName,
};

export default Service;
