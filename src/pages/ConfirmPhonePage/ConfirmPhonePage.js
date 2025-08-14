import React, { useEffect, useState, useRef } from "react";
import TitlePage from "../../components/UI/TitlePage/TitlePage";
import WrapperBlock from "../../components/UI/WrapperBlock/WrapperBlock";
import css from "./ConfirmPhonePage.module.scss";
import { fixedButtonStore } from "../../store/fixedButtonStore";

const ConfirmPhonePage = () => {
    const CODE_LENGTH = 6;
    const RESEND_TIMEOUT = 59; // секунд

    const [code, setCode] = useState(Array(CODE_LENGTH).fill(""));
    const [timer, setTimer] = useState(RESEND_TIMEOUT);
    const [isVerifying, setIsVerifying] = useState(false);
    const [resendCount, setResendCount] = useState(0); // кол-во повторных отправок
    const inputsRef = useRef([]);

    useEffect(() => {
        fixedButtonStore.clearButton()
        // cartServicesStore.setIShow(false)
    }, []);

    // Таймер обратного отсчёта
    useEffect(() => {
        if (timer > 0) {
            const interval = setInterval(() => setTimer((t) => t - 1), 1000);
            return () => clearInterval(interval);
        }
    }, [timer]);

    const handleChange = (value, index) => {
        if (/^\d?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < CODE_LENGTH - 1) {
                inputsRef.current[index + 1].focus();
            }

            // Если все ячейки заполнены — вызываем submit
            if (newCode.every((c) => c !== "")) {
                handleSubmit(newCode);
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !code[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = (enteredCode = code) => {
        setIsVerifying(true);
        setTimeout(() => {
            setIsVerifying(false);
            console.log("Проверка кода:", enteredCode.join(""));
            // Здесь можно вызывать API для проверки
        }, 1500);
    };

    const handleResend = () => {
        if (timer === 0 && resendCount < 1) {
            console.log("Отправка нового кода...");
            setTimer(RESEND_TIMEOUT);
            setResendCount(resendCount + 1);
        }
    };

    return (
        <div>
            <TitlePage>Подтвердите номер</TitlePage>
            <WrapperBlock>
                <div className={css.text}>
                    Мы отправили SMS с кодом подтверждения на ваш номер
                </div>

                <div className={css.codeInputs}>
                    {code.map((digit, i) => (
                        <input
                            key={i}
                            type="tel" // для мобильных устройств
                            inputMode="numeric" // чтобы показывалась цифровая клавиатура
                            pattern="\d*" // для iOS
                            maxLength="1"
                            value={digit}
                            disabled={isVerifying}
                            ref={(el) => (inputsRef.current[i] = el)}
                            onChange={(e) => handleChange(e.target.value, i)}
                            onKeyDown={(e) => handleKeyDown(e, i)}
                            className={isVerifying ? css.faded : ""}
                        />
                    ))}
                </div>


                <div className={css.resend}>
                    {timer > 0 ? (
                        <span>Отправить код еще раз через {timer} сек.</span>
                    ) : resendCount < 1 ? (
                        <button onClick={handleResend}>Отправить код еще раз</button>
                    ) : (
                        <span>Вы сможете отправить код позднее</span>
                    )}
                </div>
            </WrapperBlock>
        </div>
    );
};

export default ConfirmPhonePage;
