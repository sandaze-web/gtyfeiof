import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {cartServicesStore} from "../store/cartServicesStore";

export function useToggleShowBottomPanel(routesWithoutPanel) {
    const location = useLocation();

    useEffect(() => {
        if (routesWithoutPanel.includes(location.pathname)) {
            cartServicesStore.setIShow(false);
        }else {
            cartServicesStore.setIShow(true);
        }
    }, [location.pathname]);
}