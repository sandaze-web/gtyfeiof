import React from 'react';
import PropTypes from 'prop-types';
import css from './CategoryItem.module.scss';
import ImgBx from "../UI/ImgBx/ImgBx";
import WrapperBlock from "../UI/WrapperBlock/WrapperBlock";
import {Link} from "react-router-dom";

const CategoryItem = ({category}) => {
    return (
        <Link to={`${category.id}`}>
            <WrapperBlock>
                <div className={css.categoryItem}>
                    <div className={css.title}>{category.title}</div>
                    <div className={css.bottom}>
                        <div className={css.price}>от {category.price} ₽</div>
                        <ImgBx className={css.imgBx}>
                            <img src={category.imgSrc} alt=""/>
                        </ImgBx>
                    </div>
                </div>
            </WrapperBlock>
        </Link>
    );
};

CategoryItem.propTypes = {
    category: PropTypes.object.isRequired,
};

export default CategoryItem;