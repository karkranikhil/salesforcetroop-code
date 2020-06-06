import { LightningElement } from 'lwc';
import { APPLICATION_SCOPE, publish, createMessageContext, releaseMessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
export default class LMCDemoLwc extends LightningElement {
    context = createMessageContext()
    inputValue=''
    subscription = null
    recievedMessage
    publishMessage(){
        const message={
            lmsData:{
                value: this.inputValue
            }
        }
        publish(this.context, SAMPLEMC, message)
    }
    subscribeMessage(){
        if (this.subscription){
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{
            this.handleMessage(message)
        }, { scope: APPLICATION_SCOPE})
    }
    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }

    handleMessage(message){
        this.recievedMessage = message && message.lmsData? message.lmsData.value : 'No Message'
    }
    inputHandler(event){
        this.inputValue = event.target.value
    }

    disconnectedCallback() {
        releaseMessageContext(this.context)
    }

}