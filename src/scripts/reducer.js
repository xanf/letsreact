const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const RATING_LOADED = 'RATING_LOADED';
export const RATING_LOADING = 'RATING_LOADING';
export const RATING_UPDATE = 'RATING_UPDATE';

export default function reducer(oldState, action) {
  switch (action.type) {
    default:
      return oldState;
  }
}

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  }
}
