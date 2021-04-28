import axios from 'axios'

export const fetchImages = (id) => (dispatch) => {
    axios.get(`https://boiling-refuge-66454.herokuapp.com/images/`)
    .then(({ data }) => dispatch(setImages(data)))
}

export const setImages = (data) => {
    return {
        type: "SET_IMAGES",
        payload: data
    }
}