import { put, takeEvery  } from 'redux-saga/effects';

function* workerIncrementSaga() {
    console.log("Counter incremented");
    yield put({type: 'INCREMENT_ASYNC'});
}

function* workerDecrementSaga() {
    console.log("Counter decremented");
    yield put({type: 'DECREMENT_ASYNC'});
}

export function* rootSaga() {

    yield takeEvery('INCREMENT', workerIncrementSaga);
    yield takeEvery('DECREMENT', workerDecrementSaga);

}