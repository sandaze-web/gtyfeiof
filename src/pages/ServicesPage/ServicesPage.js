import React, {useEffect} from 'react';
import css from './ServicesPage.module.scss'
import ServiceItem from "../../components/ServiceItem/ServiceItem";
import TitlePage from "../../components/UI/TitlePage/TitlePage";
import {fixedButtonStore} from "../../store/fixedButtonStore";
import {useNavigate} from "react-router-dom";
import {cartServicesStore} from "../../store/cartServicesStore";
import {observer} from "mobx-react-lite";
import {ROUTE_CHECKOUT} from "../../utils/const/routesConst";

const ServicesPage = observer(props => {
    const navigate = useNavigate();
    const services = [
        {
            id: 234,
            title: 'Долговременная укладка + коррекция',
            subtitle: 'Комплексная процедура, которая включает долговременную укладку для создания аккуратной и выразительной формы, а также коррекцию для поддержания идеального результата. Позволяет надолго сохранить ухоженный внешний вид и облегчить ежедневный уход.',
            price: 1100,
            duration: 70,
            category: 'Брови',
            imgSrc: 'https://pudp.ru/pictures/48175/%D0%B1%D1%80%D0%BE%D0%B2%D0%B8.jpg'
        },
        {
            id: 236,
            title: 'Долговременная укладка + коррекция',
            price: 700,
            duration: 90,
            category: 'Ресницы',
            imgSrc: 'https://pudp.ru/pictures/48175/%D0%B1%D1%80%D0%BE%D0%B2%D0%B8.jpg'
        },
        {
            id: 237,
            title: 'Депиляция одной зоны',
            price: 1200,
            duration: 45,
            category: 'Коррекция',
            imgSrc: 'https://pudp.ru/pictures/48175/%D0%B1%D1%80%D0%BE%D0%B2%D0%B8.jpg'
        },
    ];

    //рагируем на добавление услуг, если хоть одна есть, то показывает кнопку Продолжить
    useEffect(() => {
        if (cartServicesStore.cart.length > 0) {
            fixedButtonStore.setButton({
                label: 'Продолжить',
                onClick: () => {
                    navigate(ROUTE_CHECKOUT);
                }
            });
        } else {
            // Если корзина пуста — скрываем кнопку
            fixedButtonStore.clearButton();
        }
    }, [cartServicesStore.cart.length, navigate]);

    return (
        <div>
            <TitlePage>Брови</TitlePage>
            <div className={css.servicesInner}>
                {services.map(service => (<ServiceItem key={service.id} service={service} />))}
            </div>
        </div>
    );
});


export default ServicesPage;