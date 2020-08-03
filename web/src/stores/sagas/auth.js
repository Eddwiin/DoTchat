import { put, call } from 'redux-saga/effects';
import * as actions from './../actions';

export function* logout() {
    yield call([localStorage, 'removeItem'], 'token');
    yield put(actions.logout())
}

export function* authState(state) {
    const token = yield localStorage.getItem('token');

    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(
            localStorage.getItem('expirationDate')
        );

        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem('_id');
            // A FINIR
        }
    }

}