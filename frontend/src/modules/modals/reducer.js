import {handleActions} from 'redux-actions'
import {hide, show} from './actions'

const defaultState = {}

export default handleActions(
    {
        [show](state, {payload}) {
            return {
                ...payload,
            }
        },

        [hide]() {
            return defaultState
        },
    },
    defaultState
)
