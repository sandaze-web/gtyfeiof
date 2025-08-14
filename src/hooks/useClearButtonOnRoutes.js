import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {fixedButtonStore} from "../store/fixedButtonStore";

export function useClearButtonOnRoutes(routesWithoutButton) {
    const location = useLocation();

    useEffect(() => {
        if (routesWithoutButton.includes(location.pathname)) {
            fixedButtonStore.clearButton();
        }
    }, [location.pathname]);
}