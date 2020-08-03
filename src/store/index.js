import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers/index';
import { rootSaga } from '../sagas/saga'

//**Redux-Saga Components */
import createSagaMiddleware from 'redux-saga';

const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        allReducers,
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

export default configureStore;