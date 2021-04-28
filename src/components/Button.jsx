import React from 'react'
import classNames from 'classnames'
import PropTypes from 'proptypes'


function Button({ children, className, onClick, outline }) {
    return (
        <button
            className={classNames(className, {
                "button--outline": outline
            })}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    outline: PropTypes.bool
}

export default Button
