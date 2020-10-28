import { LightningElement, api } from 'lwc';

export default class MyResumeTags extends LightningElement {
    @api tagsList
    @api heading
    @api type

    get isHeading(){
        return `slds-var-m-top_medium ${this.type === 'MAIN' ? 'section_heading' : 'section_subHeading'}`
    }
}