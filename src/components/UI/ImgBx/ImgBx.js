import React from 'react';
import css from './ImgBx.module.scss'
import PropTypes from "prop-types";

const ImgBx = ({children, className}) => {
    return (
        <div className={`${css.imgBx} ${className}`}>
            {children}
        </div>
    );
};

ImgBx.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default ImgBx;