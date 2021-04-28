import axios from 'axios'

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data}) => dispatch(setPizzas(data)))
    
}

export const setPizzas = (data) => {
    return {
        type: "SET_PIZZAS",
        payload: data
    }
}

export const setLoaded = (value) => {
    return {
        type: "SET_LOADED",
        payload: value
    }
}