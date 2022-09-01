import * as request from "./requester.js"

const baseUrl = `http://localhost:3030/data/pets`

export const getAll = () => fetch(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`).then(res => res.json());

export const create = (petData) => request.post(baseUrl, petData);

export const getOne = (petId) => request.get(`${baseUrl}/${petId}`)
