import {createAction} from 'redux-actions'
import uniqId from 'uniqid'

export const enqueueSnackbar = createAction('SNACKBAR/ENQUEUE', (payload) => {
    return {
        ...payload,
        key: uniqId(),
    }
})

export const closeSnackbar = createAction('SNACKBAR/CLOSE', (key) => ({
        dismissAll: !key,
        key
    })
)

export const removeSnackbar = createAction('SNACKBAR/REMOVE', (key) => key)

export const responseSnackbar = createAction('SNACKBAR/RESPONSE', (response, message) => ({
    response, message, key: uniqId()
}))
