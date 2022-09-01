import * as request from "./requester.js";

const baseUrl = `http://localhost:3030/data/theaters`

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=title`);

export const getOne = (eventId) => request.get(`${baseUrl}/${eventId}`);

export const create = (event) => request.post(baseUrl, event);

export const edit = (eventId, eventData) => request.put(`${baseUrl}/${eventId}`, eventData)

export const remove = (eventId) => request.del(`${baseUrl}/${eventId}`)
