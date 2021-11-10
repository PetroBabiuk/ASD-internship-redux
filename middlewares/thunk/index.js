const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
        console.log('action is a function!!!');
        return action(dispatch, getState);
    }
    console.log('action is not a function!!!');
    return next(action);
}

module.exports = thunk;