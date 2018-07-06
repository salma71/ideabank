
import _ from 'lodash';
import { FETCH_IDEAS, FETCH_IDEAS_SUCCESS, DELETE_IDEA, CREATE_IDEA, INC_LIKES} from '../actions'


export default function (state = {ideasindex: {ideas: [], loading: false}}, action) {
    let value;
    // console.log(action.type)
    switch (action.type) {
        case FETCH_IDEAS:
        // console.log(action.payload)
            return _.mapKeys(action.payload.data, 'id') 
            // return { ...state, ideasIndex: { ideas: [], loading: true } }; 
        case FETCH_IDEAS_SUCCESS:// return list of posts and make loading = false
            return { ...state, ideasIndex: { ideas: action.payload, loading: true } };
        case DELETE_IDEA:
            return _.omit(state, action.payload)

        case CREATE_IDEA:
            return { ...state, [action.payload.data.id]: action.payload.data }

        case INC_LIKES:
            value = state[action.idea.id] || 0;
            return {
                ...state,
                [action.idea.id]: value + 1
            };
        default:
            return state;
    }
}

// add case for delete ideas - done
// make sure items are being added and deleted - done