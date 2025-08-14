import React from 'react';
import {cartServicesStore} from "../../store/cartServicesStore";
import css from './CheckoutCart.module.scss'
import CartItem from "./CartItem/CartItem";
import WrapperBlock from "../UI/WrapperBlock/WrapperBlock";

const CheckoutCart = () => {
    const {cart} = cartServicesStore

    return (
        <WrapperBlock>
            <div className={css.cartItems}>
                {cart.map((service) => <CartItem key={service.id} service={service} />)}
            </div>
        </WrapperBlock>
    );
};

export default CheckoutCart;