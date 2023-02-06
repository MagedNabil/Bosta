const initialState = {
    result: null,
    data: {}
};

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "readData":
            return state;
        case "writeData":
            state.data = action.payload
            return state
        default:
            return state
    }
}

export default reducer;