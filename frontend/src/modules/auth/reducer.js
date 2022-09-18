import {handleActions} from "redux-actions";
import {loggedIn, loggedOut, setLoading} from "./actions";

const defaultState = {
    isLoading: false
}

export default handleActions(
    {
        [loggedIn](state, {payload}) {
            return {
                ...state,
                user: payload,
            }
        },
        [setLoading](state, {payload}) {
            return {
                ...state,
                isLoading: !!payload,
            }
        },
        [loggedOut]() {
            return {
                ...defaultState,
            }
        },
    },
    defaultState
)
