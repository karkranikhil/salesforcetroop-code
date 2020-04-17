import { LightningElement } from 'lwc';

export default class NotifyChildComponent extends LightningElement {
    showChildNotification = false
    childHandler(){
        this.showChildNotification = true
    }
    showNotifyParentHandler(event){
        const selectEvent = new CustomEvent('show',{
            bubbles:true
        })
        this.dispatchEvent(selectEvent)
    }
}