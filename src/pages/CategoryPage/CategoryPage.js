import React from 'react';
import css from './CategoryPage.module.scss'
import TitlePage from "../../components/UI/TitlePage/TitlePage";
import CategoryItem from "../../components/CategoryItem/CategoryItem";

const CategoryPage = () => {
    const categories = [
        {
            id: 12,
            title: 'Брови',
            price: '600',
            imgSrc: 'https://pudp.ru/pictures/48175/%D0%B1%D1%80%D0%BE%D0%B2%D0%B8.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
            id: 13,
            title: 'Ресницы',
            price: '400',
            imgSrc: 'https://kaliningrad.myguru.ru/img/cke/mast-kras-9.jpg.jpg',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam deleniti eveniet id sapiente? Necessitatibus?'
        },
    ]

    return (
        <div>
            <TitlePage>Выберите категорию</TitlePage>
            <div className={css.services}>
                {categories.map(category => (<CategoryItem key={category.id} category={category} />))}
            </div>
        </div>

    );
};

export default CategoryPage;