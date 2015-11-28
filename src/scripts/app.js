import {incrementCounter, loadRatingData, startLoadingRatingData} from './reducer';
import store from './store';
import CounterView from './views/CounterView';
import RatingView from './views/RatingView';
import connect from './connect';

const counterView = connect(
  store,
  new CounterView(document.querySelector('.counter'), {
    incrementCounter: () => store.dispatch(incrementCounter())
  }),
  (state) => state.counter,
);

const ratingView = connect(
  store,
  new RatingView(document.querySelector('.rating')),
  (state) => state.rating,
);

//store.dispatch(loadRatingData());
