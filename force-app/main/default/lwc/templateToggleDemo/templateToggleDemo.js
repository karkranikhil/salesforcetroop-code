import { LightningElement } from 'lwc';

export default class TemplateToggleDemo extends LightningElement {
    toggleText = true;
    toggleHandler(){
        this.toggleText = !this.toggleText
    }
}