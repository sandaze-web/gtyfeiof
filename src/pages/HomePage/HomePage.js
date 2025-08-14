import React, {useEffect, useState} from 'react';
import css from './HomePage.module.scss';
import TitlePage from '../../components/UI/TitlePage/TitlePage';
import ImageSlider from '../../components/UI/ImageSlider/ImageSlider';
import AboutMaster from "../../components/AboutMaster/AboutMaster";
import MasterAddressMap from "../../components/MasterAddressMap/MasterAddressMap";
import {fixedButtonStore} from "../../store/fixedButtonStore";
import {useNavigate} from "react-router-dom";
import {ROUTE_GENDERS} from "../../utils/const/routesConst";

const HomePage = () => {
    const [title] = useState('Брови и ресницы');
    const navigate = useNavigate();

    const slides = [
        {src: 'https://f2.dikidi.net/c19/v18071/3a9880g8fi.jpg', alt: ''},
        {src: 'https://f2.dikidi.net/c19/v18071/3a7na9arvb.jpg', alt: ''},
        {src: 'https://f2.dikidi.net/c19/v18071/3a7na9arvb.jpg', alt: ''},
    ];
    const master = {
        id: 23,
        name: 'Наталья Евлахова',
        phone: '8 (911) 470 15-44',
        socials: {
            vk: {
                link: 'https://vk.com'
            },
            whatsapp: {
                link: 'https://whatsapp.com'
            },
            telegram: {
                link: 'https://telegram.org'
            },
        },
        description: `-брови и ресницы, которые подчеркнут твою красоту🤍 Со мной натурально, комфортно и безопасно 🌸 Записывайся ⬇️`
    }

    useEffect(() => {
        fixedButtonStore.setButton({
            label: 'Выбрать услугу',
            onClick: () => navigate(ROUTE_GENDERS)
        })
    }, []);

    return (
        <>
            <TitlePage>{title}</TitlePage>
            <div className={css.homeInner}>
                <div className={css.slider}>
                    <ImageSlider slides={slides}/>
                </div>
                <AboutMaster master={master}/>

                <div className={css.map}>
                    <MasterAddressMap latitude={31} longitude={31}/>
                </div>
            </div>
        </>
    );
};

export default HomePage;
