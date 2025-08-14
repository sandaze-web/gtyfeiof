import React, {useEffect} from 'react';
import css from './GenderPage.module.scss';
import GenderItem from "../../components/GenderItem/GenderItem";
import TitlePage from "../../components/UI/TitlePage/TitlePage";
import {useNavigate} from "react-router-dom";
import {ROUTE_CATEGORY} from "../../utils/const/routesConst";
import {fixedButtonStore} from "../../store/fixedButtonStore";

const GenderPage = () => {
    const navigate = useNavigate();
    let genders = [
        {
            id: 23,
            name: 'male',
            label: 'Муж.',
        },{
            id: 24,
            name: 'female',
            label: 'Жен.',
        },
    ]

    useEffect(() => {
        fixedButtonStore.clearButton()
    }, [])

    const handleGender = (gender) => {
        console.log(gender) //тут сохраняем гендер
        navigate(ROUTE_CATEGORY)
    }

    return (
        <div>
            <TitlePage>Выберите пол</TitlePage>
            <div className={css.genderBx}>
                {genders.map(gender => (
                    <GenderItem
                        key={gender.id}
                        gender={gender}
                        handleGender={handleGender}
                    />))}
            </div>
        </div>

    );
};

export default GenderPage;