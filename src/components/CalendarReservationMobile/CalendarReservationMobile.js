import React, { useState, useRef } from 'react';
import css from './CalendarReservationMobile.module.scss';
import { format, addDays } from 'date-fns';
import {CalendarDaysIcon} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ru from "date-fns/locale/ru";
import CalendarReservation from "../CalendarReservation/CalendarReservation";

const generateDates = (startDate, count) => {
    return Array.from({ length: count }, (_, i) => addDays(startDate, i));
};

const CalendarReservationMobile = ({onClickDay, selectedDateParent}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [visibleDates, setVisibleDates] = useState(generateDates(startDate, 14));
    const [selectedDate, setSelectedDate] = useState(selectedDateParent);
    const [showFullCalendar, setShowFullCalendar] = useState(false);

    const shortWeekDays = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    const swiperRef = useRef(null);

    const loadMoreDates = () => {
        const lastDate = visibleDates[visibleDates.length - 1];
        const moreDates = generateDates(addDays(lastDate, 1), 7);
        setVisibleDates(prev => [...prev, ...moreDates]);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        onClickDay(date)
    };

    const handleFullCalendarClick = () => {
        setShowFullCalendar(prev => !prev)
    }

    return (
        <>
            <div className={css.calendarWrapper}>
                <div className={`${css.iconButton} ${showFullCalendar && css.iconButtonActive}`} onClick={handleFullCalendarClick}>
                    <CalendarDaysIcon width={30} height={30} />
                </div>

                <div className={css.swiperContainer}>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={'auto'}
                        spaceBetween={12}
                        freeMode={true}
                        modules={[FreeMode]}
                        className={css.dateSwiper}
                    >
                        {visibleDates.map((date, index) => {
                            const isSelected = format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd');

                            return (
                                <SwiperSlide key={index} className={css.slide}>
                                    <div
                                        className={`${css.dateButton} ${isSelected ? css.active : ''}`}
                                        onClick={() => handleDateClick(date)}
                                    >
                                        <div className={css.dayBx}>
                                            <div className={css.day}>{format(date, 'd')}</div>
                                            <div className={css.weekday}>{shortWeekDays[date.getDay()]}</div>
                                        </div>
                                        <div className={css.month}>
                                            {format(date, 'MMM', {locale: ru})}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}

                        <SwiperSlide className={css.slide}>
                            <button className={css.moreButton} onClick={loadMoreDates}>
                                ещё
                            </button>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {showFullCalendar && (
                <div className={css.fullMobileCalendar}>
                    <CalendarReservation selectedDate={selectedDate} onClickDay={handleDateClick} />
                </div>
            )}
        </>
    );
};

export default CalendarReservationMobile;
