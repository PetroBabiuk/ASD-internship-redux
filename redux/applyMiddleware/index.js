const applyMiddleware = (...middlewares) => {
    return (createStore) => (reducer, initialState) => {
        let currentReducer = reducer;
        let currentState = initialState;
        let listener = () => { };
        const store = createStore(currentReducer, currentState)

        return {
            dispatch: action => {
                currentState = currentReducer(currentState, action);
                listener()
                const chain = middlewares.map((middleware) => middleware(store))
                return compose(...chain)(store.dispatch)(action);
            },
            subscribe(newListener) {
                listener = newListener;
            },
            getState() {
                return currentState;
            }
        }
    }
}

const compose = (...funcs) => {

    return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

module.exports = applyMiddleware;