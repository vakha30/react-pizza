import React from 'react'
import PropTypes from 'proptypes'
import classNames from 'classnames'

const Categories = React.memo(function Categories({ categoryNames, activeCategory, onSelectCategory }) {

    const handleClick = (index) => {
        onSelectCategory(index)
    }

    return (
        <div className="categories">
            <ul>
                <li
                    className={classNames({
                        active: activeCategory === null
                    })}
                    onClick={() => handleClick(null)}
                >Все</li>
                {
                    categoryNames.map((name, index) =>
                        <li
                            key={`${name}_${index}`}
                            className={classNames({
                                active: activeCategory === index
                            })}
                            onClick={() => handleClick(index)}
                        >
                            {name}
                        </li>
                    )
                }
            </ul>
        </div>
    )
})

Categories.propTypes = {
    categoryNames: PropTypes.arrayOf(PropTypes.string),
    activeCategory: PropTypes.number,
    onSelectCategory: PropTypes.func
}

Categories.defaultProps = {
    categoryNames: [],
    activeCategory: null
}

export default Categories
