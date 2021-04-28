export const addToCart = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

export const deleteOnePizza = (id) => {
    return {
        type: "DELETE_ONE_PIZZA",
        payload: id
    }
}

export const removePizzas = (id) => {
    return {
        type: "REMOVE_PIZZAS",
        payload: id
    }
}

export const clearCart = () => {
    return (dispatch) => {
        window.confirm("Вы действительно хотите очистить корзину?") && dispatch({type: "CLEAR_CART"})
    }
}
