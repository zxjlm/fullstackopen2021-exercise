import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const createPerson = (person) => {
  return axios.post(baseUrl, person);
};

const deletePerson = (person_id) => {
  return axios.delete(`${baseUrl}/${person_id}`);
};

const updatePerson = (person) => {
  return axios.put(`${baseUrl}/${person.id}`, person);
};

export default { getAll, createPerson, deletePerson, updatePerson };
