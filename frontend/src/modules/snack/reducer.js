import {handleActions} from "redux-actions";
import {closeSnackbar, enqueueSnackbar, removeSnackbar, responseSnackbar} from "./actions";


const defaultState = {
    notifications: [],
}

export default handleActions(
    {
        [enqueueSnackbar](state, {payload}) {
            return {
                notifications: [
                    ...state.notifications,
                    payload
                ]

            }
        },
        [closeSnackbar](state, {payload}) {
            return {
                notifications: state.notifications.map(notification => (
                    (payload.dismissAll || notification.key === payload.key)
                        ? {...notification, dismissed: true}
                        : {...notification}
                )),
            }
        },
        [removeSnackbar](state, {payload}) {
            return {
                notifications: state.notifications.filter(
                    notification => notification.key !== payload,
                ),
            }
        },
        [responseSnackbar](state, {payload: {response, message, key}}) {
            if (response.status === 401) {
                return defaultState
            }
            const mes = message || response.data.error_message || "Request denied"
            return {
                notifications: [
                    ...state.notifications,
                    {
                        key,
                        message: mes,
                        options: {
                            variant: 'error',
                        },
                    }
                ]
            }
        }
    },
    defaultState
)
