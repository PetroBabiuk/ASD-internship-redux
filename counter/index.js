const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'counter/incremented':
            return state + 1
        case 'counter/decremented':
            return state - 1
        default:
            return state
    }
}

module.exports = counterReducer;