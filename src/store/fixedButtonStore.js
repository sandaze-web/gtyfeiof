import {makeAutoObservable} from "mobx";

class FixedButtonStore {
    label = ''
    onClick = null

    constructor() {
        makeAutoObservable(this)
    }

    setButton({label, onClick}) {
        this.label = label
        this.onClick = onClick
    }

    clearButton() {
        this.label = ''
        this.onClick = null
    }
}

export const fixedButtonStore = new FixedButtonStore()