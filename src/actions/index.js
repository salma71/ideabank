import axios from 'axios';

export const FETCH_IDEAS = 'fetch_ideas'
export const FETCH_IDEAS_SUCCESS = 'FETCH_IDEAS_SUCCESS';
export const FETCH_IDEAS_FAILURE = 'FETCH_IDEAS_FAILURE';
export const RESET_IDEAS = 'RESET_IDEAS';

export const CREATE_IDEA = 'create_idea'
export const CREATE_IDEA_SUCCESS = 'CREATE_IDEA_SUCCESS';
export const CREATE_IDEA_FAILURE = 'CREATE_IDEA_FAILURE';
export const RESET_NEW_IDEA = 'RESET_NEW_IDEA';

export const FETCH_IDEA = 'fetch_idea'
export const FETCH_IDEA_SUCCESS = 'FETCH_IDEA_SUCCESS';
export const FETCH_IDEA_FAILURE = 'FETCH_IDEA_FAILURE';
export const RESET_ACTIVE_IDEA = 'RESET_ACTIVE_IDEA';

export const DELETE_IDEA = 'delete_idea';
export const DELETE_IDEA_SUCCESS = 'DELETE_IDEA_SUCCESS';
export const DELETE_IDEA_FAILURE = 'DELETE_IDEA_FAILURE';
export const RESET_DELETED_IDEA = 'RESET_DELETED_IDEA';

// export const INC_LIKES = 'INCREMENT_LIKES'

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
export function createIdea(values, callback) {
    // debugger;
    const request = axios.post(`${ROOT_URL}/ideas`, values)
    .then((res) => {
        callback()
        return res;
    });
    
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
export function incrementLikes(id, likes) {
    const request = axios.put(`${ROOT_URL}/ideas/${id}`, {likes})

    // on request done, update store
// debugger;
    return {
        type: 'INC_LIKES',
        payload: {
            id,
            likes
        }
    }
}

// nick@karnik.io
// http://calendar.karnik.io
// +1.301.466.1598
