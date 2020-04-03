import { LightningElement } from 'lwc';

export default class TemplateOnChangeDemo extends LightningElement {
    inputText = null;
    get checkText(){
        return this.inputText === 'Troops'
    }
    changeHandler(event){
        this.inputText = event.target.value
    }
}