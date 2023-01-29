import http from "../http-common";
const getAll = () => {
  console.log(process.env.REACT_APP_STUDENT_APP_API_URL);
  return http.get(`/pets`);
};

const get = (id) => {
  return http.get(`/pets/${id}`);
};

const create = (data) => {
  return http.post(`/pets`, data);
};

const update = (id, data) => {
  return http.put(`/pets/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/pets/${id}`);
};

const removeAll = () => {
  return http.delete(`/pets`);
};

const findByFirstName = (firstName) => {
  return http.get(`/pets?firstName=${firstName}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByFirstName: findByFirstName,
};
