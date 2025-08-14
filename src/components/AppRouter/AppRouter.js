import {useRoutes} from "react-router-dom";
import {routes} from "../../utils/routes";

const AppRouter = props => {
    return useRoutes(routes);
};

export default AppRouter;