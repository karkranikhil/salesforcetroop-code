import { LightningElement } from 'lwc';

export default class TemplateTrueDemo extends LightningElement {
    showText = false;
    showHandler(){
        this.showText = true;
    }
}