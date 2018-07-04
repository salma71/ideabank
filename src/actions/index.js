import axios from 'axios';

export const FETCH_IDEAS = 'fetch_ideas'
export const CREATE_IDEA = 'create_idea'
export const FETCH_IDEA = 'fetch_idea'
export const DELETE_IDEA = 'delete_idea';

const ROOT_URL = `http://0.0.0.0:3000/api/v1`;

export function fetchIdeas() {
    const request = axios.get(`${ROOT_URL}/ideas`);
    // console.log('Request:', request)
    return {
        type: FETCH_IDEAS,
        payload: request
    }
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
export function incrementLikes(id) {
    axios.patch(`${ROOT_URL}/ideas/${id}`)
    .then((res) => {
        debugger;
    })
}

// update all to use dispatch action
// return dispatch {
// async code here
//}


// export const setIdeas = ideas => {
//     return {
//         type: 'FETCH_IDEAS',
//         ideas
//     }
// }

// export const fetchIdeas = () => {
//     return dispatch => {
//         return fetch(`${ROOT_URL}/ideas`, {
//             method: 'GET',
//         })
//             .then(ideas => {
//                 dispatch(setIdeas(ideas))
//             })
//             .catch(error => console.log(error));
//     }
// }
