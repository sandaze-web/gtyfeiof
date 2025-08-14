import HomePage from "../pages/HomePage/HomePage";
import GenderPage from "../pages/GenderPage/GenderPage";
import {
    ROUTE_GENDERS,
    ROUTE_HOME,
    ROUTE_CATEGORY,
    ROUTE_SUB_CATEGORY,
    ROUTE_SERVICE, ROUTE_CHECKOUT, ROUTE_CONTACTS, ROUTE_RESUME, ROUTE_CONFIRM_PHONE
} from "./const/routesConst";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import ResumePage from "../pages/ResumePage/ResumePage";
import ConfirmPhonePage from "../pages/ConfirmPhonePage/ConfirmPhonePage";
import ProtectedRouter from "../components/ProtectedRouter/ProtectedRouter";

export const routes = [
    {path: ROUTE_HOME, element: <HomePage/>},
    {path: ROUTE_GENDERS, element: <GenderPage/>},
    {path: ROUTE_CATEGORY, element: <CategoryPage/>},
    {path: ROUTE_SUB_CATEGORY, element: <ServicesPage/>,},
    {path: ROUTE_SERVICE, element: <ServicePage/>},
    {path: ROUTE_CHECKOUT, element: <CheckoutPage/>},
    {path: ROUTE_CONTACTS, element: <ContactsPage/>},
    {path: ROUTE_RESUME, element: <ResumePage/>},
    {
        path: ROUTE_CONFIRM_PHONE,
        element:
            <ProtectedRouter>
                <ConfirmPhonePage/>
            </ProtectedRouter>
    },
];