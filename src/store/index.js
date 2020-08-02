import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducers/index';
import { watchIncrement } from '../sagas/saga'

//**Redux-Saga Components */
import createSagaMiddleware from 'redux-saga';

const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        allReducers,
        applyMiddleware(sagaMiddleware),
    );

    sagaMiddleware.run(watchIncrement);

    return store;
}

export default configureStore;