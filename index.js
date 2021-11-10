const { createStore, combineReducers, applyMiddleware } = require('./redux');

const todosReducer = require('./todos');
const counterReducer = require('./counter');
const functionAction = require('./functionAction');

const { thunk, loggerMiddleware } = require('./middlewares');

const initialState = {
    todoState: [],
    counterState: 0,
};

const rootReducer = combineReducers({
    todoState: todosReducer,
    counterState: counterReducer
});

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware, thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer, initialState);

store.subscribe(() => console.log(store.getState()));


//////////////////////////////////      ВИКЛИКИ      ////////////////////////////////////////////////


// ////  Каунтер

store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/decremented' });

////   Тудушки

store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Зробити redux своїми руками'
});

store.dispatch({
    type: 'ADD_TODO',
    id: 2,
    text: 'Добавити логіку combineReducers'
});

store.dispatch({
    type: 'ADD_TODO',
    id: 3,
    text: 'Добавити логіку middleware'
})

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 1
});

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 2
});

store.dispatch({
    type: 'TOGGLE_TODO',
    id: 3
});

////    Мідлвара санк

store.dispatch(functionAction());
