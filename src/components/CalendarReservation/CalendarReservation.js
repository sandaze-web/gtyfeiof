import React, { useState } from 'react';
import css from './CalendarReservation.module.scss';
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import CalendarReservationDay from "./CalendarReservationDay/CalendarReservationDay";
import {
    startOfMonth,
    endOfMonth,
    startOfWeek,
    addDays,
    subMonths,
    addMonths,
    format,
    isSameDay,
    isSameMonth
} from 'date-fns';
import { ru } from 'date-fns/locale';

const shortWeekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const mockedRecords = [
    '2025-07-25',
    '2025-07-28'
];

const CalendarReservation = ({ className, onClickDay, selectedDate }) => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(startOfMonth(today));

    const monthStart = startOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const totalCells = 42;

    const generateCalendarDays = () => {
        const days = [];
        let day = startDate;

        for (let i = 0; i < totalCells; i++) {
            const inCurrentMonth = isSameMonth(day, monthStart);
            const isToday = isSameDay(day, today);
            const isWeekend = [0, 6].includes(day.getDay());

            let display = day.getDate();
            if (day.getDate() === 1 || i === 0) {
                display = {
                    day: day.getDate(),
                    month: format(day, 'LLL', { locale: ru })
                };
            }

            days.push({
                date: day,
                display,
                current: inCurrentMonth,
                today: isToday,
                weekend: isWeekend,
            });

            day = addDays(day, 1);
        }

        return days;
    };

    const handleDayClick = (date) => {
        if (isSameDay(date, selectedDate)) {
            onClickDay(null);
        } else {
            onClickDay(date);
        }
    };

    const calendarDays = generateCalendarDays();

    return (
        <div className={`${className} ${css.calendar}`}>
            <div className={css.calendarHeader}>
                <div className={css.title}>{format(currentMonth, 'LLLL yyyy', { locale: ru })}</div>
                <div className={css.calendarArrows}>
                    <button className={css.arrow} onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                        <ChevronLeftIcon />
                    </button>
                    <button className={css.arrow} onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>

            <div className={css.calendarDays}>
                <div className={css.calendarWeekdays}>
                    {shortWeekDays.map((day) => (
                        <div key={day} className={css.calendarDayName}>
                            {day}
                        </div>
                    ))}
                </div>

                <div className={css.calendarGrid}>
                    {calendarDays.map((day, index) => {
                        const hasRecord = mockedRecords.includes(format(day.date, 'yyyy-MM-dd'));
                        return (
                            <CalendarReservationDay
                                key={index}
                                day={day}
                                isSameDate={isSameDay}
                                onClick={handleDayClick}
                                selectedDate={selectedDate}
                                hasRecord={hasRecord}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default CalendarReservation;
