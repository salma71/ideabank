import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
//just renaming reducer to formreducer
import { reducer as formReducer } from 'redux-form'
import IdeasReducer from './reducer_ideas';
import LikesReducer from './reducer_likes'

const rootReducer = combineReducers({
    // state: (state = {}) => state
    ideas: IdeasReducer,
    form: formReducer,
    likes: LikesReducer
});

export default rootReducer;
