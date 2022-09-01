import * as request from "./requester.js";

const baseUrl = `http://localhost:3030/data/pets`;

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`);

export const create = (petData) => request.post(baseUrl, petData);

export const getOne = (petId) => request.get(`${baseUrl}/${petId}`);

export const remove = (petId) => request.del(`${baseUrl}/${petId}`);

export const edit = (petId, petData) => request.put(`${baseUrl}/${petId}`, petData);