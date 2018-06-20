import axios from 'axios';

const ROOT_URL = `http://0.0.0.0:3000/api/v1/ideas`;

export const FETCH_IDEAS = 'FETCH_IDEAS'

export function fetchIdeas() {

    const request = axios.get(`${ROOT_URL}`);
    return {
        type: FETCH_IDEAS,
        payload: request
    }
}