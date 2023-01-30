import http from "./http-common";
const getAll = () => {
  console.log(process.env.REACT_APP_Pet_APP_API_URL);
  return http.get(`/pets`);
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
