const initialState = {
    result: null,
    data: {}
};

const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case "writeResult":
            state.result = action.payload
            return state;
        case "writeData":
            state.data = action.payload
            return state
        default:
            return state
    }
}

export default reducer;