import { LightningElement } from 'lwc';

export default class BarParentComponent extends LightningElement {
    changeColor(){
        this.template.querySelector('c-bar-child-component').changeBarColor()
    }
}