import React from "react";
import { observer } from "mobx-react-lite";
import {userDataStore} from "../../store/userDataStore";
import {fixedButtonStore} from "../../store/fixedButtonStore";
import css from './UserForm.module.scss'
// import {useTelegram} from "../../hooks/useTelegram";

const UserForm = observer(() => {
    // const {tg} = useTelegram();

    const handleRequestPhone = () => {
        // if (tg?.requestContact) {
        //     tg.requestContact((contact) => {
        //         if (contact?.phone_number) {
        //             // Нормализуем номер в формат +7
        //             let digits = contact.phone_number.replace(/\D/g, "");
        //             if (digits.startsWith("8")) digits = "7" + digits.slice(1);
        //             if (!digits.startsWith("7")) digits = "7" + digits;
        //             userDataStore.setPhone("+" + digits);
        //         }
        //     });
        // }
    };

    const handleApplyPromo = () => {
        console.log("Промокод применён:", userDataStore.promo);
    };

    return (
        <div className={css.form}>
            <input
                type="text"
                placeholder="Введите имя"
                value={userDataStore.name}
                onChange={(e) => userDataStore.setName(e.target.value)}
            />

            <input
                type="tel"
                placeholder="Номер телефона"
                value={userDataStore.phone}
                onClick={handleRequestPhone}
                onChange={(e) => userDataStore.setPhone(e.target.value)}
            />

            <textarea
                placeholder="Комментарий"
                value={userDataStore.comment}
                onChange={(e) => userDataStore.setComment(e.target.value)}
            />

            <div className={css.promo}>
                <input
                    type="text"
                    placeholder="Промокод"
                    value={userDataStore.promo}
                    onChange={(e) => userDataStore.setPromo(e.target.value)}
                />
                <button onClick={handleApplyPromo}>Применить</button>
            </div>
        </div>
    );
});

export default UserForm;
