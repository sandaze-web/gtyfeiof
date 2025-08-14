import { makeAutoObservable } from "mobx";

class TimeStore {
    selectedDate = null;
    selectedTime = null;

    constructor() {
        makeAutoObservable(this);
    }

    setDate(date) {
        this.selectedDate = date;
        this.selectedTime = null;
    }

    setTime(time) {
        console.log(time)
        this.selectedTime = time;
    }
}

export const timeStore = new TimeStore();