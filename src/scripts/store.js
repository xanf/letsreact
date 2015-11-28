import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import logger from './middlewares/logger';
const rating = {loading: false, entities: [{id: 1, points: 100, name: 'Hello'}]};

const createStoreWithMiddleware = applyMiddleware(logger)(createStore)


export default createStoreWithMiddleware(reducer, { counter: 1, rating });
