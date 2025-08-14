import React from 'react';
import PropTypes from 'prop-types';
import css from './TitlePage.module.scss'

const TitlePage = ({children}) => {
    return (
        <div className={css.titlePage}>
            {children}
        </div>
    );
};

TitlePage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TitlePage;