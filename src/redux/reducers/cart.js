const initialState = {
    items: {

    },
    totalCount: 0,
    totalPrice: 0
}

const getTotalPrice = (currentPizzaItems) => {
    return currentPizzaItems.reduce((acum, current) => acum += current.price, 0)
}

const getTotalCount = (items) => {
    return Object.keys(items).reduce((acum, cur) => acum += items[cur].items.length, 0)
}

const getTotalSum = (items) => {
    return Object.keys(items).map((key) => items[key].totalPrice).reduce((acum, cur) => acum + cur, 0)
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const currentPizzaItems = state.items[action.payload.id] ? [...state.items[action.payload.id].items, action.payload] : [action.payload]
            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalCount: currentPizzaItems.length,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            return {
                ...state,
                items: newItems,
                totalCount: getTotalCount(newItems),
                totalPrice: getTotalSum(newItems)
            }

        case "DELETE_ONE_PIZZA":
            const filterItems = state.items[action.payload].items.slice()
            filterItems.pop()

            const newFilterItems = {
                ...state.items,
                [action.payload]: {
                    items: filterItems,
                    totalCount: filterItems.length,
                    totalPrice: getTotalPrice(filterItems)
                }
            }
            if (newFilterItems[action.payload].items.length === 0) {
                delete state.items[action.payload]
                return {
                    ...state,
                    totalCount: getTotalCount(newFilterItems),
                    totalPrice: getTotalSum(newFilterItems)
                }
            }
            return {
                ...state,
                items: newFilterItems,
                totalCount: getTotalCount(newFilterItems),
                totalPrice: getTotalSum(newFilterItems)
            }
        case "REMOVE_PIZZAS":
            delete state.items[action.payload]
            const newFilterItems2 = {
                ...state.items
            }

            
            return {
                ...state,
                items: newFilterItems2,
                totalCount: getTotalCount(newFilterItems2),
                totalPrice: getTotalSum(newFilterItems2)
            }
            case "CLEAR_CART":
                return {
                    ...state,
                    items: {},
                    totalCount: 0,
                    totalPrice: 0
                }
        default:
            return state
    }
}

export default cart