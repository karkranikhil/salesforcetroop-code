import { LightningElement, wire } from 'lwc';
import getContactLists from '@salesforce/apex/ContactController.getContactLists';
export default class MyWireComponent extends LightningElement {
    @wire(getContactLists) 
    contacts

    renderedCallback(){
        if (this.contacts && this.contacts.data){
            console.log(JSON.stringify(this.contacts.data))
        }
    }
}