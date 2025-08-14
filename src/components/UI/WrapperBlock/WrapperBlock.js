import React from 'react';
import PropTypes from 'prop-types';
import css from './WrapperBlock..module.scss'

const WrapperBlock = ({children}) => {
    return (
        <div className={css.wrapper}>
            {children}
        </div>
    );
};

WrapperBlock.propTypes = {
    children: PropTypes.node.isRequired,
};

export default WrapperBlock;