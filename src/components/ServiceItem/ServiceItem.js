import React from 'react';
import PropTypes from 'prop-types';
import css from './ServiceItem.module.scss'
import WrapperBlock from "../UI/WrapperBlock/WrapperBlock";
import ImgBx from "../UI/ImgBx/ImgBx";
import {observer} from "mobx-react-lite";
import {cartServicesStore} from "../../store/cartServicesStore";
import {ROUTE_SERVICE} from "../../utils/const/routesConst";
import {Link} from "react-router-dom";
import {formatDuration} from "../../utils/formatDuration";

const ServiceItem = observer( ({service}) => {
    const isInCart = cartServicesStore.cart.some(item => item.id === service.id);

    return (
        <Link to={`${service.id}`}>
            <WrapperBlock>
                <div className={css.serviceItem}>
                    <div className={css.titleBx}>
                        <ImgBx className={css.imgBx}>
                            <img src={service.imgSrc} alt=""/>
                        </ImgBx>
                        <div className={css.title}>
                            <span className={css.titleMain}>{service.title}</span>
                        </div>
                    </div>
                    {service.subtitle && (
                        <span className={css.subtitle}>{service.subtitle}</span>
                    )}
                    <div className={css.bottom}>
                        <div className={css.info}>
                            <span className={css.price}>{service.price.toLocaleString('ru')} ₽</span>
                            <span className={css.separator}></span>
                            <span className={css.duration}>{formatDuration(service.duration)}</span>
                        </div>
                        <div className={css.buttonBx} onClick={(e) => {e.preventDefault(); e.stopPropagation()}}>
                            {isInCart ? (
                                <button
                                    onClick={() => cartServicesStore.removeFromCart(service)}
                                    className={`${css.button} ${css.inCart}`}
                                >
                                    Убрать
                                </button>
                            ) : (
                                <button
                                    onClick={() => cartServicesStore.addToCart(service)}
                                    className={css.button}
                                >
                                    Выбрать
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </WrapperBlock>
        </Link>
    );
});

ServiceItem.propTypes = {
    service: PropTypes.object.isRequired,
};

export default ServiceItem;