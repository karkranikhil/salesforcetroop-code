
import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class PubsubChildOne extends LightningElement {
    buttonHandler(evt){
        this.eventPublisher(evt.target.innerText)
    }
    eventPublisher(data){
        pubsub.publish("accordionTriggered", data)
    }
}