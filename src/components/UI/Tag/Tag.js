import React from 'react';
import PropTypes from 'prop-types';
import css from './Tag.module.scss'

const Tag = ({children, className}) => {
    return (
        <span className={`${css.tag} ${className}`}>
            {children}
        </span>
    );
};

Tag.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Tag;