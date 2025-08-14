import React, {useEffect} from 'react';
import TitlePage from "../../components/UI/TitlePage/TitlePage";
import WrapperBlock from "../../components/UI/WrapperBlock/WrapperBlock";
import css from './ResumePage.module.scss'
import {UserIcon, CalendarDaysIcon} from "@heroicons/react/24/outline";
import {fixedButtonStore} from "../../store/fixedButtonStore";
import {useNavigate} from "react-router-dom";
import {ROUTE_CONFIRM_PHONE} from "../../utils/const/routesConst";

const ResumePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        fixedButtonStore.setButton({
            label: "Все верно!",
            onClick: () => { navigate(ROUTE_CONFIRM_PHONE); },
        })
    }, [])

    return (
        <div>
            <TitlePage>Уточнение</TitlePage>
            <WrapperBlock>
                <div className={css.resume}>
                    <div className={css.itemBx}>
                        <div className={css.item}>
                            <div className={css.icon}>
                                <UserIcon width={24} height={24} />
                            </div>
                            <div className={css.itemMain}>
                                <span className={css.hint}>специалист</span>
                                <span className={css.title}>Наталья Евлахова</span>
                            </div>
                        </div>
                        <div className={css.item}>
                            <div className={css.icon}>
                                <CalendarDaysIcon width={24} height={24} />
                            </div>
                            <div className={css.itemMain}>
                                <span className={css.hint}>10:00 - 11:00, 1ч. 10 мин.</span>
                                <span className={css.title}>Пн, 29 сент.</span>
                            </div>
                        </div>
                    </div>

                    <div className={css.recordsBx}>
                        <div className={css.record}>
                            <div className={css.recordTitle}>Долговременная укладка + коррекция</div>
                            <div className={css.recordSubtitle}>
                                <span>1ч. 10 мин.</span>
                                <span>1300 ₽</span>
                            </div>
                        </div>
                        <div className={css.record}>
                            <div className={css.recordTitle}>Долговременная укладка + коррекция</div>
                            <div className={css.recordSubtitle}>
                                <span>1ч. 10 мин.</span>
                                <span>1300 ₽</span>
                            </div>
                        </div>
                    </div>

                    <div className={css.priceBx}>
                        <div className={css.priceText}>Итого*</div>
                        <div className={css.price}>1300 ₽</div>
                    </div>
                </div>
            </WrapperBlock>
            <div className={css.notice}>
                *Оплачивать сейчас не нужно — расчёт производится только после проведения процедуры.
            </div>
        </div>
    );
};

export default ResumePage;