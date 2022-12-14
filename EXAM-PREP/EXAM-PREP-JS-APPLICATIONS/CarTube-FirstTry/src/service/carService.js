import * as request from "./requester.js"

const baseUrl = `http://localhost:3030/data/cars`

export const getCars = () => fetch(`${baseUrl}?sortBy=_createdOn%20desc`).then(res => res.json());

export const create = (carData) => request.post(baseUrl, carData);

export const getOne = (carId) => request.get(`${baseUrl}/${carId}`)

export const edit = (carId, carData) => request.put(`${baseUrl}/${carId}`, carData)

export const remove = (carId) => request.del(`${baseUrl}/${carId}`)