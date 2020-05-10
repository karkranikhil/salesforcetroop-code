import { LightningElement, api } from 'lwc';
import USER_ID from '@salesforce/user/Id'
export default class CurrentRecordAndObjectInfo extends LightningElement {
    @api recordId;
    @api objectApiName;
    userId = USER_ID
}