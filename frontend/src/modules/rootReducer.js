import {combineReducers} from 'redux'

import auth from './auth/reducer'
import modals from './modals/reducer'
import snack from './snack/reducer'

const reducers = {
    auth,
    modals,
    snack
}

export const persistReducers = [
    'auth.user',
]

export default function createRootReducer() {
    return combineReducers({
        ...reducers,
    })
}
