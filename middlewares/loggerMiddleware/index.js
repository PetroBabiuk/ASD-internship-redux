const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    console.groupEnd(action.type);

    return next(action);
};

module.exports = loggerMiddleware;