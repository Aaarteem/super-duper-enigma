import {all, takeEvery} from "redux-saga/effects"
import * as actions from './actions'

export default function* () {
    yield all([
        takeEvery(actions.login, loginWorker),
        takeEvery(actions.logout, logoutWorker),
    ])
}

function* loginWorker({payload}) {
}

function* logoutWorker() {
}
