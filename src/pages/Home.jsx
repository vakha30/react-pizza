import React from 'react'
 
import { useDispatch, useSelector } from 'react-redux'

import { Categories, SortBy, PizzaBlock, PizzaLoader } from '../components'

import { fetchPizzas } from '../redux/actions/pizzas'
import { setCategory, setSortBy } from '../redux/actions/filter'
import { addToCart } from '../redux/actions/cart'

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]
const sortNames = [
    {name: "популярности", type: "rating", order: "desc"},
    {name: "цене", type: "price", order: "desc"},
    {name: "алфавиту", type: "name", order: "asc"}
]


function Home() {
    const dispatch = useDispatch()
    const {category, sortBy} = useSelector(({filter}) => filter)
    const {items, isLoaded} = useSelector(({pizzas}) => pizzas)
    const cartItems = useSelector(({cart}) => cart.items)
    
    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [dispatch, category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectSortBy = React.useCallback((obj) => {
        dispatch(setSortBy(obj))
    },[dispatch])

    const addPizzaToCart = (obj) => {
        dispatch(addToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    categoryNames={categoryNames}
                    activeCategory={category}
                    onSelectCategory={onSelectCategory}
                />
                <SortBy 
                    sortNames={sortNames}
                    activeSortBy={sortBy.type}
                    onSelectSort={onSelectSortBy}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded 
                    ? items && items.map((item) => <PizzaBlock key={item.id} {...item} count={cartItems[item.id] && cartItems[item.id].items.length} addPizzaToCart={addPizzaToCart} />)
                    : Array(10).fill(0).map((_, index) => <PizzaLoader key={index} /> )
                }
            </div>
        </div>
    )
}

export default Home
