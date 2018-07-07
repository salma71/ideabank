import {
    FETCH_IDEAS, FETCH_IDEAS_SUCCESS, FETCH_IDEAS_FAILURE, RESET_IDEAS,
    FETCH_IDEA, FETCH_IDEA_SUCCESS, FETCH_IDEA_FAILURE, RESET_ACTIVE_IDEA,
    CREATE_IDEA, CREATE_IDEA_SUCCESS, CREATE_IDEA_FAILURE, RESET_NEW_IDEA,
    DELETE_IDEA, DELETE_IDEA_SUCCESS, DELETE_IDEA_FAILURE, RESET_DELETED_IDEA,
    VALIDATE_IDEA_FIELDS, VALIDATE_IDEA_FIELDS_SUCCESS, VALIDATE_IDEA_FIELDS_FAILURE, RESET_IDEA_FIELDS
} from '../actions';


const INITIAL_STATE = {
    ideasIndex: { ideas: [], error: null, loading: true },
    newIdea: { idea: null, error: null, loading: false },
    activeIdea: { idea: null, error: null, loading: false },
    deletedIdea: { idea: null, error: null, loading: false },
};

export default function (state = {ideas: []}, action) {
    let error;
    switch (action.type) {

        case FETCH_IDEAS:// start fetching IDEAS and set loading = true
            return { ...state, ideasIndex: { ideas: [], error: null, loading: true } };
        case FETCH_IDEAS_SUCCESS:// return list of IDEAS and make loading = false
            return { ...state, ideasIndex: { ideas: action.payload, error: null, loading: false } };
        case FETCH_IDEAS_FAILURE:// return error and make loading = false
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, ideasIndex: { ideas: [], error: error, loading: false } };
        case RESET_IDEAS:// reset ideaList to initial state
            return { ...state, ideasIndex: { ideas: [], error: null, loading: false } };

        case FETCH_IDEA:
            return { ...state, activeidea: { ...state.activeIdea, loading: true } };
        case FETCH_IDEA_SUCCESS:
            return { ...state, activeIdea: { idea: action.payload, error: null, loading: false } };
        case FETCH_IDEA_FAILURE:
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, activeIdea: { idea: null, error: error, loading: false } };
        case RESET_ACTIVE_IDEA:
            return { ...state, activeIdea: { idea: null, error: null, loading: false } };

        case CREATE_IDEA:
            return { ...state, newIdea: { ...state.newIdea, loading: true } }
        case CREATE_IDEA_SUCCESS:
            return { ...state, newIdea: { idea: action.payload, error: null, loading: false } }
        case CREATE_IDEA_FAILURE:
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, newIdea: { idea: null, error: error, loading: false } }
        case RESET_NEW_IDEA:
            return { ...state, newIdea: { idea: null, error: null, loading: false } }


        case DELETE_IDEA:
            return { ...state, deletedIdea: { ...state.deletedIdea, loading: true } }
        case DELETE_IDEA_SUCCESS:
            return { ...state, deletedIdea: { idea: action.payload, error: null, loading: false } }
        case DELETE_IDEA_FAILURE:
            error = action.payload || { message: action.payload.message };//2nd one is network or server down errors
            return { ...state, deletedIdea: { idea: null, error: error, loading: false } }
        case RESET_DELETED_IDEA:
            return { ...state, deletedIdea: { idea: null, error: null, loading: false } }

        case VALIDATE_IDEA_FIELDS:
            return { ...state, newIdea: { ...state.newIdea, error: null, loading: true } }
        case VALIDATE_IDEA_FIELDS_SUCCESS:
            return { ...state, newIdea: { ...state.newIdea, error: null, loading: false } }
        case VALIDATE_IDEA_FIELDS_FAILURE:
            let result = action.payload;
            if (!result) {
                error = { message: action.payload.message };
            } else {
                error = { title: result.title, categories: result.categories, description: result.description };
            }
            return { ...state, newIdea: { ...state.newIdea, error: error, loading: false } }
        case RESET_IDEA_FIELDS:
            return { ...state, newIdea: { ...state.newIdea, error: null, loading: null } }
        default:
            return state;
    }
}