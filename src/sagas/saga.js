//import { delay } from 'redux-saga/effects';
import { take, put, call, takeEvery  } from 'redux-saga/effects';

// //Worker Saga
// function* incrementAsync() {
//     yield delay(4000);
//     yield put({type: 'INCREMENT_ASYNC'});
// }

// //Watched Saga
// export function* watchIncrement(){
//     yield takeLatest('INCREMENT', incrementAsync);
// }

function* workerIncrementSaga() {
    console.log("Counter incremented");
    yield put({type: 'INCREMENT_ASYNC'});
}

function* workerDecrementSaga() {
    console.log("Counter decremented");
    yield put({type: 'DECREMENT_ASYNC'});
}

export function* rootSaga() {
    // yield take('INCREMENT');
    // yield call(workerIncrementSaga);

    // yield take('DECREMENT');
    // yield call(workerDecrementSaga);

    yield takeEvery('INCREMENT', workerIncrementSaga);
    yield takeEvery('DECREMENT', workerDecrementSaga);

}