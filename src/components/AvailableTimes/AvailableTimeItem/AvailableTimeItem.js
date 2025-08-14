import React from 'react';
import PropTypes from 'prop-types';
import css from './AvailableTimeItem.module.scss'
import {observer} from "mobx-react-lite";

const AvailableTimeItem = ({time, isSelected, onSelectTime}) => {
    return (
        <div className={`${css.item} ${isSelected ? css.selected : ''}`} onClick={onSelectTime}>
            {time}
        </div>
    );
};

AvailableTimeItem.propTypes = {
    time: PropTypes.string.isRequired,
};

export default AvailableTimeItem;