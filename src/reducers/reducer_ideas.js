
import _ from 'lodash';
import { FETCH_IDEAS, FETCH_IDEA, FETCH_IDEAS_SUCCESS, DELETE_IDEA, CREATE_IDEA} from '../actions'


export default function (state = {ideas: [], loading: true}, action) {
    // console.log(action.type)
    switch (action.type) {
        case 'INC_LIKES':
            let {id, likes} = action.payload
            if(!state.ideas[id]) {
                return state
            }
            let ideasInc = {...state.ideas}
            let idea = ideasInc[id]
            idea.likes = likes

            return {
                ideas: ideasInc,
                loading: false
            }
        case FETCH_IDEAS:
            let ideas = _.mapKeys(action.payload.data, 'id')
            let fetchVal = { ...state, ideas, loading: false  }; 
            return fetchVal
        case FETCH_IDEA:
            let data = action.payload.data
            let ideaCollection = {...state.ideas, ...{[data.id]: data} }

            //let ideas = _.mapKeys(action.payload.data, 'id')
            let valIdea = { ...state, ...{ideas: ideaCollection}, loading: false };
            return valIdea

        case FETCH_IDEAS_SUCCESS:// return list of posts and make loading = false
            return { ...state, ideas: action.payload, loading: false };
        
        case DELETE_IDEA:
            return _.omit(state, action.payload)

        case CREATE_IDEA:
            return { ...state, [action.payload.data.id]: action.payload.data }
        default:
            return state;
    }
}

// add case for delete ideas - done
// make sure items are being added and deleted - done