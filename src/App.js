import AppRouter from "./components/AppRouter/AppRouter";
import {useClearButtonOnRoutes} from "./hooks/useClearButtonOnRoutes";
import {ROUTE_CATEGORY, ROUTE_CONFIRM_PHONE} from "./utils/const/routesConst";
import {useToggleShowBottomPanel} from "./hooks/useToggleShowBottomPanel";
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";

const App = () => {
    //убираем кнопку в зависимости от роута для bfcache (back-forward cache)
    useClearButtonOnRoutes([ROUTE_CATEGORY])

    //убираем нижнюю панель зависимости от роута для bfcache (back-forward cache)
    useToggleShowBottomPanel([ROUTE_CONFIRM_PHONE])

    const {tg} = useTelegram()

    useEffect(() => {
        tg.expand()
        tg.ready()
        tg.isFullscreen = true
    }, []);

    return  <AppRouter />
}
export default App;
