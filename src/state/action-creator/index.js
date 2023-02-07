
export const writeResult = (result) => {
    return (dispatch) => {
        dispatch({
            type: "writeResult",
            payload: result
        });
    }
}


export const writeData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "writeData",
            payload: data
        });
    }
}