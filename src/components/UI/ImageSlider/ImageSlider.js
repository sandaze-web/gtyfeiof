import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import SlideItem from '../SlideItem/SlideItem';
import css from './ImageSlider.module.scss';
import PropTypes from "prop-types";

const ImageSlider = ({slides}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);
    const timers = useRef([]);

    const SLIDE_DURATION = 5000;

    useEffect(() => {
        if (slides.length < 1) return
        timers.current.forEach(clearTimeout);
        timers.current = [];

        timers.current.push(
            setTimeout(() => {
                if (!swiperRef.current) return;
                if (activeIndex === swiperRef.current.slides.length - 1) {
                    swiperRef.current.slideTo(0);
                } else {
                    swiperRef.current.slideNext();
                }
            }, SLIDE_DURATION)
        );

        return () => timers.current.forEach(clearTimeout);
    }, [activeIndex]);

    return (
        <div className={css.sliderWrapper}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <SlideItem src={slide.src} alt={slide.alt}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            {slides.length > 1 && (
                <div className={css.progressContainer}>
                    {Array.from({length: slides.length}).map((_, i) => (
                        <div
                            key={i}
                            className={`${css.progressBar} ${i === activeIndex ? css.active : ""} ${i < activeIndex ? css.full : ""}`}
                        >
                            <div className={css.progressFill}></div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

ImageSlider.propTypes = {
    slides: PropTypes.array.isRequired,
}

export default ImageSlider;
