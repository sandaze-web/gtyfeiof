import React from 'react';
import PropTypes from 'prop-types';
import css from './CartItem.module.scss'
import WrapperBlock from "../../UI/WrapperBlock/WrapperBlock";
import {formatDuration} from "../../../utils/formatDuration";
import Tag from "../../UI/Tag/Tag";

const CartItem = ({service}) => {
    return (
        <div className={css.item}>
            <div className={css.title}>
                {service.title}
                <Tag className={css.tag}>
                    {service.category}
                </Tag>
            </div>
            <div className={css.info}>
                <span className={css.duration}>{formatDuration(service.duration)}</span>
                <span className={css.price}>{service.price.toLocaleString('ru')} ₽</span>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    service: PropTypes.object.isRequired,
};

export default CartItem;