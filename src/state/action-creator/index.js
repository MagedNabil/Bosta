
export const readData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "readData"
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