import React, {useEffect, useState} from 'react';
import { observer } from "mobx-react-lite";
import { useNavigate, useLocation } from "react-router-dom";
import { userDataStore } from "../../store/userDataStore";
import { cartServicesStore } from "../../store/cartServicesStore";
import { timeStore } from "../../store/timeStore";
import {ROUTE_CATEGORY, ROUTE_CHECKOUT, ROUTE_CONTACTS, ROUTE_RESUME} from "../../utils/const/routesConst";

const ProtectedRouter = observer(({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        // Проерка на выбор услуги, выбор времени и заполнение формы
        if (cartServicesStore.cart.length === 0) {
            navigate(ROUTE_CATEGORY, { replace: true });
            return;

        }
        if (!timeStore.selectedTime) {
            navigate(ROUTE_CHECKOUT, { replace: true });
            return;

        }
        if (!userDataStore.isFormValid) {
            navigate(ROUTE_CONTACTS, { replace: true });
            return;
        }

        setIsChecked(true)

    }, [navigate, location.pathname, cartServicesStore.cart.length, timeStore.selectedTime, userDataStore.isFormValid]);


    if(!isChecked) return;
    return <>{children}</>;
});

export default ProtectedRouter;
