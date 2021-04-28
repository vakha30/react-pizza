export const setCategory = (index) => {
    return {
        type: "SET_CATEGORY",
        payload: index
    }
}

export const setSortBy = ({type, order}) => {
    return {
        type: "SET_SORT_BY",
        payload: {type, order}
    }
}