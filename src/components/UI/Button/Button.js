import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.scss'

const Button = ({
                    className,
                    variant,
                    onClick,
                    children,
                }) => {
    return (
        <button className={`${css.button} ${className} ${css[variant]}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['accent', 'selected']),
    onClick: PropTypes.func,
};

export default Button;