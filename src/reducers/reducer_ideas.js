import _ from 'lodash';
import { FETCH_IDEAS, FETCH_IDEA } from '../actions'

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_IDEA:
            // const idea = action.payload.data;
            // const newState = { ...state }; //take all the existing ideas and put them in that obj
            // newState[idea.id] = idea;
            // return newState;
            return { ...state, [action.payload.data.id]: action.payload.data}
        case FETCH_IDEAS:
            return _.mapKeys(action.payload.data, 'id')
            
        default:
            return state;
    }
}