import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
const rating = {loading: false, entities: [{id: 1, points: 100, name: 'Hello'}]};

// const createStoreWithMiddleware = applyMiddleware(logger, promises, ws)(createStore)


export default createStore(reducer, { counter: 1, rating });
