import { getToken } from "./authService.JS";

export const requester = (method, url, data) => {
    let options = {};
    let token = getToken();

    if (options != 'GET') {
        options.method = method;
        options.headers = {
            'content-type': 'application/json'
        }
        options.body = JSON.stringify(data);
        if (token) {
            options.headers['X-Authorization'] = token;
        }
    }
    return fetch(url, options).then(res => res.json());
}

export const get = requester.bind({}, 'GET');
export const post = requester.bind({}, 'POST');
export const put = requester.bind({}, 'PUT');
export const del = requester.bind({}, 'DELETE');