import { FETCH_SOMETHING_ERROR, FETCH_SOMETHING_LOADING, FETCH_SOMETHING_SUCCESS } from "../../actions/Types";

const initialState = {
    something: [],
    somethingLoading: false,
    somethingError: null
}

export default function Something(state = initialState, action) {
    switch (action.type) {
        case FETCH_SOMETHING_ERROR:
            return {
                ...state,
                somethingError: action.payload
            };
        case FETCH_SOMETHING_LOADING:
            return {
                ...state,
                somethingLoading: action.payload
            };
        case FETCH_SOMETHING_SUCCESS:
            return {
                ...state,
                something: action.payload
            }
        default:
            return state;
    }
}