import {createAction} from 'redux-actions'

export const show = createAction('MODAL/SHOW', (type, args) => ({type, args}))
export const hide = createAction('MODAL/HIDE', () => null)

