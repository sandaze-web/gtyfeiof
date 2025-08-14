import React from 'react';
import TitlePage from "../../components/UI/TitlePage/TitlePage";
import UserForm from "../../components/UserForm/UserForm";
import {userDataStore} from "../../store/userDataStore";
import {fixedButtonStore} from "../../store/fixedButtonStore";
import {useNavigate} from "react-router-dom";
import {ROUTE_RESUME} from "../../utils/const/routesConst";
import {observer} from "mobx-react-lite";

const ContactsPage = observer(() => {
    const navigate = useNavigate();
    if (userDataStore.isFormValid) {
        fixedButtonStore.setButton({
            label: 'Продолжить',
            onClick: () => (navigate(ROUTE_RESUME))
        })
    } else {
        fixedButtonStore.clearButton()
    }

    return (
        <div>
            <TitlePage>Ваши данные</TitlePage>
            <UserForm />
        </div>
    );
});

export default ContactsPage;