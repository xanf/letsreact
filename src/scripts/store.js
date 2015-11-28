import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import logger from './middlewares/logger';
import async from './middlewares/async';
const rating = {loading: false, entities: [{id: 1, points: 100, name: 'Hello'}]};

const createStoreWithMiddleware = applyMiddleware(logger, async)(createStore)


export default createStoreWithMiddleware(reducer, { counter: 1, rating });
