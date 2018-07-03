
import _ from 'lodash';
import { FETCH_IDEAS, FETCH_IDEA, DELETE_IDEA, CREATE_IDEA } from '../actions'

export default function (state = {}, action) {
    // console.log(action.payload)
    switch (action.type) {
        // case FETCH_IDEA:
            // const idea = action.payload.data;
            // const newState = { ...state }; //take all the existing ideas and put them in that obj
            // newState[idea.id] = idea;
            // return newState;
            // return { ...state, [action.payload.data.id]: action.payload.data }
        // case Delete_ideas:
        case FETCH_IDEAS:
            return _.mapKeys(action.payload.data, 'id')
            // return { ...state, ideas: action.ideas }

        case DELETE_IDEA:
            return _.omit(state, action.payload)
        case CREATE_IDEA:
            // const idea = action.payload.data;
            // const newState = { ...state }; //take all the existing ideas and put them in that obj
            // // return newState[idea.id] = idea;
            return { ...state, [action.payload.data.id]: action.payload.data }
            // return newState
        default:
            return state;
    }
}

// add case for delete ideas - done
// make sure items are being added and deleted - done