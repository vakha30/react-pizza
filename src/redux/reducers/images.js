const initialState = {
    items: []
}

const images = (state=initialState, action) => {
    switch(action.type) {
        case "SET_IMAGES":
            return {
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}

export default images