import { makeAutoObservable } from "mobx";

class UserDataStore {
    name = "";
    phone = ""; // хранится в формате маски
    comment = "";
    promo = "";

    constructor() {
        makeAutoObservable(this);
    }

    setName(value) {
        this.name = value;
    }

    setPhone(value) {
        let digits = (value || "").replace(/\D/g, "");

        // Полностью очистили
        if (digits.length === 0) {
            this.phone = "";
            return;
        }

        // Нормализация к +7
        if (digits[0] === "8") digits = "7" + digits.slice(1);
        if (digits[0] !== "7") digits = "7" + digits;
        digits = digits.slice(0, 11);

        const len = digits.length;
        let out = "+7";

        if (len > 1) {
            // код региона
            const area = digits.slice(1, Math.min(len, 4));
            out += " (" + area;

            // Закрывающую скобку показываем, только если есть цифры дальше
            if (len > 4) out += ") ";
        }

        if (len > 4) {
            // первые 3 после кода региона
            const part1 = digits.slice(4, Math.min(len, 7));
            out += part1;

            // Пробел только если дальше будут ещё цифры
            if (len > 7) out += " ";
        }

        if (len > 7) {
            // следующие 2
            const part2 = digits.slice(7, Math.min(len, 9));
            out += part2;

            // Дефис только если есть последняя пара
            if (len > 9) out += "-";
        }

        if (len > 9) {
            // последние 2
            const part3 = digits.slice(9, 11);
            out += part3;
        }

        this.phone = out;
    }

    setComment(value) {
        this.comment = value;
    }

    setPromo(value) {
        this.promo = value;
    }

    get isFormValid() {
        // Проверяем, что имя есть и номер заполнен полностью
        const phoneDigits = this.phone.replace(/\D/g, "");
        return (
            this.name.trim() !== "" &&
            phoneDigits.length === 11
        );
    }
}

export const userDataStore = new UserDataStore();
