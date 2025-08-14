import React from 'react';
import css from './FixedButton.module.scss'
import {fixedButtonStore} from "../../store/fixedButtonStore";
import {observer} from "mobx-react-lite";

const FixedButton = observer(props => {
    let {label, onClick} = fixedButtonStore
    if (!label) return

    return (
        <button className={css.button} onClick={onClick}>
            {label}
        </button>
    );
});

export default FixedButton;