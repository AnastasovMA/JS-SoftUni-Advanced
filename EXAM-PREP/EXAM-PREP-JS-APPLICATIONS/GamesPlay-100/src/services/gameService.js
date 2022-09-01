import * as request from "./requester.js"

const baseUrl = `http://localhost:3030/data/games`

export const getAll = () => request.get(`${baseUrl}?sortBy=_createdOn%20desc`);

export const getLastThree = () =>
    request.get(`${baseUrl}?sortBy=_createdOn%20desc&distinct=category`)
        .then(games => {
            return games.slice(0, 3);
        })
export const getOne = (gameId) => request.get(`${baseUrl}/${gameId}`);

export const create = (gameData) => request.post(baseUrl, gameData);

export const edit = (gameId, gameData) => request.put(`${baseUrl}/${gameId}`, gameData);

export const remove = (gameId) => request.del(`${baseUrl}/${gameId}`);
