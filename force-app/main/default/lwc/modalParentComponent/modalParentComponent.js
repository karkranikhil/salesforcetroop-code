import { LightningElement } from 'lwc';

export default class ModalParentComponent extends LightningElement {
    showModal = false
    showHandler() {
        this.showModal = true
    }
    modalCloseHandler(){
        this.showModal = false
    }
}