const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const RATING_LOADED = 'RATING_LOADED';
export const RATING_LOADING = 'RATING_LOADING';
export const RATING_UPDATE = 'RATING_UPDATE';

export default function reducer(oldState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...oldState,
        counter: oldState.counter + 1,
      }
    default:
      return oldState;
  }
}

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  }
}

export function loadRatingData() {
  return {
    types: [RATING_LOADING, RATING_LOADED],
    //??????
  }
}
