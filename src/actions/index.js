import axios from 'axios';

export const FETCH_IDEAS = 'fetch_ideas'
export const CREATE_IDEA = 'create_idea'
export const FETCH_IDEA = 'fetch_idea'
export const DELETE_IDEA = 'delete_idea';
export const PATCH_IDEA = 'patch_idea'

const ROOT_URL = `http://0.0.0.0:3000/api/v1`;

export function fetchIdeas() {
    const request = axios.get(`${ROOT_URL}/ideas`);
    
    return {
        type: FETCH_IDEAS,
        payload: request
    }
}

export function createIdea(values, callback) {
    const request = axios.post(`${ROOT_URL}/ideas`, values)
    .then(() => callback());
    
    return {
        type: CREATE_IDEA,
        payload: request
    }
}

export function fetchIdea(id) {
    const request = axios.get(`${ROOT_URL}/ideas/${id}`);
    
    return {
        type: FETCH_IDEA,
        payload: request
    }
}

export function deleteIdea(id, callback) {
    const request = axios.delete(`${ROOT_URL}/ideas/${id}`)
    .then(() => callback());
    
    return {
        type: DELETE_IDEA,
        payload: id
    }
}

export function patchIdea(id, callback) {
    const request = axios.put(`${ROOT_URL}/ideas/${id}`)
    .then(() => callback)
    
    return {
        type: PATCH_IDEA,
        payload: request
    }
}