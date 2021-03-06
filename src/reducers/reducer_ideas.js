
import _ from 'lodash';
import { FETCH_IDEAS, FETCH_IDEA, PATCH_IDEA } from '../actions'

export default function (state = {}, action) {
    // console.log(action.payload)
    switch (action.type) {
        case FETCH_IDEA:
            // const idea = action.payload.data;
            // const newState = { ...state }; //take all the existing ideas and put them in that obj
            // newState[idea.id] = idea;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data }
        case FETCH_IDEAS:
            return _.mapKeys(action.payload.data, 'id')

        case PATCH_IDEA:
            return { ...state, [action.payload.data.id]: action.payload.data }
        // const idea = action.payload.data;
        // console.log(idea)
        // const newState = { ...state }; //take all the existing ideas and put them in that obj
        // newState[idea.title] = idea;
        // return newState
        default:
            return state;
    }
}