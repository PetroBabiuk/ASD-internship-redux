const functionAction = () => {
    return async (dispatch, getState) => {
        if (getState().counterState % 2) {
            dispatch({
                type: 'ADD',
            })
        }
        await new Promise(resolve => setTimeout(resolve, 2000))
        dispatch({
            type: 'TOGGLE_TODO',
            id: 1
        })
    }
}

module.exports = functionAction;