import React from 'react';
import PropTypes from 'prop-types';
import AvailableTimeItem from "./AvailableTimeItem/AvailableTimeItem";
import css from './AvailableTimes.module.scss'

const AvailableTimes = ({times, onSelectTime, selectedTime}) => {
    return (
        <div className={css.times}>
            {times.map((time, i) => (
                <AvailableTimeItem
                    key={i}
                    isSelected={time === selectedTime}
                    onSelectTime={() => {onSelectTime(time)}}
                    time={time}
                />
                ))}
        </div>
    );
};

AvailableTimes.propTypes = {
    times: PropTypes.array.isRequired,
};

export default AvailableTimes;