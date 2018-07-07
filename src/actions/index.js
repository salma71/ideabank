import axios from 'axios';

export const FETCH_IDEAS = 'FETCH_IDEAS'
export const FETCH_IDEAS_SUCCESS = 'FETCH_IDEAS_SUCCESS';
export const FETCH_IDEAS_FAILURE = 'FETCH_IDEAS_FAILURE';
export const RESET_IDEAS = 'RESET_IDEAS';

export const CREATE_IDEA = 'CREATE_IDEA'
export const CREATE_IDEA_SUCCESS = 'CREATE_IDEA_SUCCESS';
export const CREATE_IDEA_FAILURE = 'CREATE_IDEA_FAILURE';
export const RESET_NEW_IDEA = 'RESET_NEW_IDEA';

export const VALIDATE_IDEA_FIELDS = 'VALIDATE_IDEA_FIELDS';
export const VALIDATE_IDEA_FIELDS_SUCCESS = 'VALIDATE_IDEA_FIELDS_SUCCESS';
export const VALIDATE_IDEA_FIELDS_FAILURE = 'VALIDATE_IDEA_FIELDS_FAILURE';
export const RESET_IDEA_FIELDS = 'RESET_IDEA_FIELDS';

export const FETCH_IDEA = 'FETCH_IDEA'
export const FETCH_IDEA_SUCCESS = 'FETCH_IDEA_SUCCESS';
export const FETCH_IDEA_FAILURE = 'FETCH_IDEA_FAILURE';
export const RESET_ACTIVE_IDEA = 'RESET_ACTIVE_IDEA';

export const DELETE_IDEA = 'DELETE_IDEA';
export const DELETE_IDEA_SUCCESS = 'DELETE_IDEA_SUCCESS';
export const DELETE_IDEA_FAILURE = 'DELETE_IDEA_FAILURE';
export const RESET_DELETED_IDEA = 'RESET_DELETED_IDEA';

export const INC_LIKES = 'INCREMENT_LIKES'

const ROOT_URL = `http://0.0.0.0:3000/api/v1`;

export function fetchIdeas() {

    const request = axios.get(`${ROOT_URL}/ideas`)
    // .then(res => console.log(res))
    // console.log('Request:', request)
    return {
        type: FETCH_IDEAS,
        payload: request
    }
}
export function fetchIdeasSuccess(ideas) {
    return {
        type: FETCH_IDEAS_SUCCESS,
        payload: ideas
    };
}
export function fetchIdeasFailure(error) {
    return {
        type: FETCH_IDEAS_FAILURE,
        payload: error
    };
}
export function createIdea(props, callback) {
    // debugger;
    const request = axios.post(`${ROOT_URL}/ideas`, props)
    .then((res) => {
        callback()
        return res;
    });
    
    return {
        type: CREATE_IDEA,
        payload: request
    }
}
export function createIdeaSuccess(newIdea) {
    return {
        type: CREATE_IDEA_SUCCESS,
        payload: newIdea
    };
}
export function fetchIdea(id) {
    const request = axios.get(`${ROOT_URL}/ideas/${id}`);
    
    return {
        type: FETCH_IDEA,
        payload: request
    }
}
export function fetchIdeaSuccess(activeIdea) {
    return {
        type: FETCH_IDEA_SUCCESS,
        payload: activeIdea
    };
}
export function createIdeaFailure(error) {
    return {
        type: CREATE_IDEA_FAILURE,
        payload: error
    };
}

export function resetNewIdea() {
    return {
        type: RESET_NEW_IDEA
    }
}
;
export function deleteIdea(id, callback) {
   axios.delete(`${ROOT_URL}/ideas/${id}`)
    .then((res) => {
        callback()
        return res;
    });
    
    return {
        type: DELETE_IDEA,
        payload: id
    }
}
export function incrementLikes(id) {
    const request = axios.patch(`${ROOT_URL}/ideas/${id}`)
// debugger;
    return {
        type: INC_LIKES,
        payload: request
    }
}

