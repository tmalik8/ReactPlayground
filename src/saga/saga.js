import { delay } from 'redux-saga/effects';
import { takeLatest, put,  } from 'redux-saga/effects';

//Worker Saga
function* incrementAsync() {
    // yield delay(4000);
    yield put({type: 'INCREMENT_ASYNC', value: 5});
}

//Watched Saga
export function* watchIncrement(){
    yield takeLatest('INCREMENT', incrementAsync);
}