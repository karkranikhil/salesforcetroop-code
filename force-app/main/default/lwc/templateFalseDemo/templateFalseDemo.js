import { LightningElement } from 'lwc';

export default class TemplateFalseDemo extends LightningElement {
    hideText = false;
    hideHandler(){
        this.hideText = true;
    }
}