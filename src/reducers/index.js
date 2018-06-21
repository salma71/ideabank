import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
//just renaming reducer to formreducer
import { reducer as formReducer } from 'redux-form'
import IdeaReducer from './reducer_ideas';

const rootReducer = combineReducers({
    // state: (state = {}) => state
    ideas: IdeaReducer,
    form: formReducer
});

export default rootReducer;
