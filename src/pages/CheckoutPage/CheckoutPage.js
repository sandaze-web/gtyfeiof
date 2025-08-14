import React, {useEffect} from 'react';
import TitlePage from "../../components/UI/TitlePage/TitlePage";
import CheckoutCart from "../../components/CheckoutCart/CheckoutCart";
import {fixedButtonStore} from "../../store/fixedButtonStore";
import CalendarReservationMobile from "../../components/CalendarReservationMobile/CalendarReservationMobile";
import AvailableTimes from "../../components/AvailableTimes/AvailableTimes";
import {timeStore} from "../../store/timeStore";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ROUTE_CONTACTS} from "../../utils/const/routesConst";

const CheckoutPage = observer(() => {
    const times = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"]
    const navigate = useNavigate();

    useEffect(() => {
        if (timeStore.selectedDate && timeStore.selectedTime) {
            fixedButtonStore.setButton({
                label: 'Продолжить',
                onClick: () => {
                    navigate(ROUTE_CONTACTS);
                }
            });
        }else {
            fixedButtonStore.clearButton()
        }
    }, [timeStore.selectedDate, timeStore.selectedTime]);

    return (
        <div>
            <TitlePage>Выберите дату и время</TitlePage>
            <CheckoutCart />
            <CalendarReservationMobile
                selectedDateParent={timeStore.selectedDate}
                onClickDay={timeStore.setDate.bind(timeStore)}
            />
            {timeStore.selectedDate && (
                <AvailableTimes
                    times={times}
                    selectedTime={timeStore.selectedTime}
                    onSelectTime={timeStore.setTime.bind(timeStore)}
                />
            )}
        </div>
    );
});

export default CheckoutPage;