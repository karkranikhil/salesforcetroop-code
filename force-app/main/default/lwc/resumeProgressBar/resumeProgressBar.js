import { LightningElement, api } from 'lwc';

export default class ResumeProgressBar extends LightningElement {
    @api progressValue = '0'
    get getStyle(){
        return `width:${this.progressValue}%`
    }
}