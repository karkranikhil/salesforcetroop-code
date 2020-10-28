import { LightningElement, api } from 'lwc';

export default class ResumeHeader extends LightningElement {
    @api profileImage
    @api socialDetails
    @api userDetails={}

    get phoneLink(){
        return `tel:${this.userDetails.PHONE}`
    }
    get emailLink() {
        return `mailto:${this.userDetails.EMAIL}`
    }
}