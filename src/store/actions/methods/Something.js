import { FETCH_SOMETHING_ERROR, FETCH_SOMETHING_LOADING, FETCH_SOMETHING_SUCCESS } from "../Types";

export const fetchSomethingSuccess = (payload) => {
    return {
        type: FETCH_SOMETHING_SUCCESS,
        payload
    }
}

export const fetchSomethingError = (payload) => {
    return {
        type: FETCH_SOMETHING_ERROR,
        payload
    }
}

export const fetchSomethingLoading = (payload) => {
    return {
        type: FETCH_SOMETHING_LOADING,
        payload
    }
}

