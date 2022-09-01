import * as request from "./requester.js"

const baseUrl = `http://localhost:3030/data`;

export const getByGameId = (gameId) =>
    request.get(`${baseUrl}/comments?where=gameId%3D%22${gameId}%22`);

export const postComment = (content) => 
    request.post(`${baseUrl}/comments`, content);