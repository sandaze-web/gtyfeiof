import React from 'react';
import css from "../CalendarReservation.module.scss";
import PropTypes from "prop-types";
import { isSameDay } from 'date-fns';

const CalendarReservationDay = ({ day, onClick: parentHandleDayClick, isSameDate, selectedDate, hasRecord }) => {
    const today = new Date();
    const isPastDay = day.date < today && !isSameDay(day.date, today); // Проверка на прошедший день

    return (
        <div
            className={`${css.calendarDay}
                        ${day.current ? css.currentMonth : css.otherMonth}
                        ${day.today ? css.today : ''}
                        ${day.weekend ? css.weekend : ''}
                        ${isSameDate(day.date, selectedDate) ? css.selected : ''}
                        ${isPastDay ? css.disable : ''}`}
            onClick={() => !isPastDay && parentHandleDayClick(day.date)} // Отключаем клик для прошедших дней
        >
            {typeof day.display === 'object' ? (
                <>
                    <div className={css.nextMonthName}>{day.display.month}</div>
                    {' '}
                    <span>{day.display.day}</span>
                </>
            ) : (
                <span>{day.display}</span>
            )}
            {hasRecord && <div className={css.recordPoint}></div>}
        </div>
    );
};

CalendarReservationDay.propTypes = {
    day: PropTypes.shape({
        date: PropTypes.instanceOf(Date).isRequired,
        display: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.shape({
                day: PropTypes.number.isRequired,
                month: PropTypes.string.isRequired,
            }),
        ]).isRequired,
        current: PropTypes.bool.isRequired,
        today: PropTypes.bool.isRequired,
        weekend: PropTypes.bool.isRequired,
    }).isRequired,
    onClick: PropTypes.func,
    isSameDate: PropTypes.func.isRequired,
    selectedDate: PropTypes.instanceOf(Date),
    hasRecord: PropTypes.bool,
};

export default CalendarReservationDay;