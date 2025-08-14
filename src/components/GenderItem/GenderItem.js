import React from 'react';
import PropTypes from 'prop-types';
import css from './GenderItem.module.scss'
import MaleIcon from "../UI/Icons/GenderIcons/MaleIcon";
import FemaleIcon from "../UI/Icons/GenderIcons/FemaleIcon";

const GenderItem = ({gender, handleGender}) => {
    return (
        <div className={css.genderItem} onClick={() => handleGender(gender)}>
            <div className={css.title}>{gender.label}</div>
            <div className={css.icon}>
                {gender.name === 'male'
                ? <MaleIcon width={20} height={20} />
                : <FemaleIcon width={20} height={20} />}
            </div>
        </div>
    );
};

GenderItem.propTypes = {
    gender: PropTypes.object,
    handleGender: PropTypes.func,
};

export default GenderItem;