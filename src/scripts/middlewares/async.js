const middleware = store => next => action => {

  if (typeof action.request !== 'function') {
    return next(action);
  }

  const [loadingType, loadedType] = action.types;

  store.dispatch({ type: loadingType });

  return action.request().then(data => {
    store.dispatch({ type: loadedType, data});
  });
}

export default middleware;
