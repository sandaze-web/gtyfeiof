import React from 'react';
import {observer} from "mobx-react-lite";
import css from './CartServicesBottomPanel.module.scss'
import {cartServicesStore} from "../../store/cartServicesStore";

const CartServicesBottomPanel = observer(() => {
    if (!cartServicesStore.isShow) return;

    const {cart} = cartServicesStore;

    const formatAllTime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;

        let result = "";
        if (hours > 0) result += `${hours} ч. `;
        if (mins > 0) result += `${mins} мин.`;

        return result.trim();
    }
    const getServiceWord = (count) => {
        const lastDigit = count % 10;
        const lastTwoDigits = count % 100;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
            return 'услуг';
        }
        if (lastDigit === 1) {
            return 'услуга';
        }
        if (lastDigit >= 2 && lastDigit <= 4) {
            return 'услуги';
        }
        return 'услуг';
    }

    return (
        <div>
            <div className={`${css.cartPanel} ${cart.length && css.show}`}>
                {cart.length > 0 && (
                    <div className={css.info}>
                        <div className={css.counts}>
                            <div className={css.servicesCount}>{cart.length} {getServiceWord(cart.length)}</div>
                            <div className={css.separator}></div>
                            <div
                                className={css.duration}>{formatAllTime(cart.reduce((sum, service) => sum + service.duration, 0))}</div>
                        </div>
                        <div className={css.priceBx}>
                            <div
                                className={css.price}>{cart.reduce((sum, service) => sum + service.price, 0).toLocaleString('ru')} ₽
                            </div>
                            <button onClick={() => {
                                cartServicesStore.clearCart()
                            }} className={css.clearCart}>Очистить
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default CartServicesBottomPanel;