import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
//just renaming reducer to formreducer
import { reducer as formReducer } from 'redux-form'
import IdeaReducer from './reducer_ideas';
import LikeReducer from './reducer_likes'

const rootReducer = combineReducers({
    // state: (state = {}) => state
    ideas: IdeaReducer,
    form: formReducer,
    likes: LikeReducer
});

export default rootReducer;
