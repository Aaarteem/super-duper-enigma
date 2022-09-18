import {createAction} from 'redux-actions'

export const login = createAction('AUTH/LOGIN', (email, password, remember) => ({
    email,
    password,
    remember
}))

export const setLoading = createAction(
    'AUTH/SET_LOADING',
    (isLoading = true) => isLoading
)

export const loggedIn = createAction('AUTH/LOGGED_IN')

export const logout = createAction('AUTH/LOGOUT')

export const loggedOut = createAction('AUTH/LOGGED_OUT')
