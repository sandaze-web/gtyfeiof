import React, {useEffect} from 'react';
import css from './ServicePage.module.scss'
import ImageSlider from "../../components/UI/ImageSlider/ImageSlider";
import {formatDuration} from "../../utils/formatDuration";
import {fixedButtonStore} from "../../store/fixedButtonStore";
import Button from "../../components/UI/Button/Button";
import {cartServicesStore} from "../../store/cartServicesStore";
import {observer} from "mobx-react-lite";
import Tag from "../../components/UI/Tag/Tag";

const ServicePage = observer (() => {
    const service = {
        id: 234,
        title: 'Долговременная укладка + коррекция',
        subtitle: 'Комплексная процедура, которая включает долговременную укладку для создания аккуратной и выразительной формы, а также коррекцию для поддержания идеального результата. Позволяет надолго сохранить ухоженный внешний вид и облегчить ежедневный уход.',
        price: 1100,
        duration: 70,
        category: 'Брови',
        imgs: ['https://pudp.ru/pictures/48175/%D0%B1%D1%80%D0%BE%D0%B2%D0%B8.jpg', 'https://pudp.ru/pictures/48175/%D0%B1%D1%80%D0%BE%D0%B2%D0%B8.jpg']
    }
    const slides = service.imgs.map((url) => ({
        src: url,
        alt: service.title
    }));
    const isInCart = cartServicesStore.cart.some(item => item.id === service.id);

    useEffect(() => {
        fixedButtonStore.clearButton()
    })

    return (
        <div className={css.service}>
            <div className={css.slider}>
                <ImageSlider slides={slides}/>
            </div>
            <div className={css.title}>
                {service.title}
                <Tag>
                    {service.category}
                </Tag>
            </div>
            {service.subtitle && (
                <div className={css.subtitle}>{service.subtitle}</div>
            )}

            <div className={css.info}>
                <span>{formatDuration(service.duration)}</span>
                <span>{service.price.toLocaleString('ru')} ₽</span>
            </div>


            {isInCart ? (
                <Button
                    onClick={() => cartServicesStore.removeFromCart(service)}
                    className={`${css.button} ${css.inCart}`}
                    variant={'selected'}
                >
                    Убрать
                </Button>
            ) : (
                <Button
                    onClick={() => cartServicesStore.addToCart(service)}
                    className={css.button}
                    variant={'selected'}
                >
                    Выбрать
                </Button>
            )}
        </div>
    );
});

export default ServicePage;