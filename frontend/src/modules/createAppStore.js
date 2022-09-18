import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import createRootReducer, {persistReducers} from "./rootReducer";
import rootSaga from './rootSaga';
import {load, save} from 'redux-localstorage-simple'
import instance from 'api/http'
import {logout} from './auth/actions'

const LOCAL_STORAGE_PERSIST_NAME = 'IqNeoSimulator'

export default function createAppStore(history, defaultState = {}) {
    const composeEnhancers =
        typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
            : compose

    const sagaMiddleware = createSagaMiddleware()

    const middlewares = [
        sagaMiddleware,
        save({states: persistReducers, namespace: LOCAL_STORAGE_PERSIST_NAME}),
    ]

    const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(
        createStore
    )
    const store = createStoreWithMiddleware(createRootReducer(), {
        ...defaultState,
        ...load({states: persistReducers, namespace: LOCAL_STORAGE_PERSIST_NAME}),
    })

    sagaMiddleware.run(rootSaga);

    instance.interceptors.response.use(null, (error) => {
        const {status} = error.response
        // eslint-disable-next-line default-case
        switch (true) {
            case status === 401:
                store.dispatch(logout())
        }
        return Promise.reject(error)
    })

    return store
}
