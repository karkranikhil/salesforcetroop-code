import { LightningElement } from 'lwc';

export default class NotifyParentComponent extends LightningElement {
    showNotification=false
    showHandler(){
        this.showNotification=true;
    }
}