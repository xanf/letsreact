const middleware = store => next => action => {
  console.log(action.type, action);
  return next(action);
}

export default middleware;
