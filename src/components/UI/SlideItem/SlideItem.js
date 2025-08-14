import React from 'react';
import ImgBx from '../ImgBx/ImgBx';
import css from './SlideItem.module.scss';
import PropTypes from "prop-types";

const SlideItem = ({ src, alt }) => {
    return (
        <ImgBx className={css.imgBx}>
            <img src={src} alt={alt || ''} />
        </ImgBx>
    );
};

SlideItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
}

export default SlideItem;