import { LightningElement, wire } from 'lwc';
import { getSObjectValue } from '@salesforce/apex';
import getAccountList from '@salesforce/apex/testController.getAccountList';
import getAccountById from '@salesforce/apex/testController.getAccountById';
import getContactList from '@salesforce/apex/testController.getContactList';

import NAME_FIELD from '@salesforce/schema/Account.Name';
export default class TestLwc extends LightningElement {

    //Method 1 wire by property
    @wire(getAccountById, { accId:'0012w00000BrY1qAAF'})
    wireAccounts


    get name() {
        return this.wireAccounts.data ? getSObjectValue(this.wireAccounts.data[0], NAME_FIELD) : '';
    }

    //Method 2 wire by function
    results
    @wire(getAccountList)
    accounts({data, error}){
        if(data){
            console.log(data)
            this.results = data
        }
        if (error) {
            console.error(error)
        }
    };

    // Method 3 Call an Apex Method Imperatively
    contacts
    handleLoad() {
        getContactList()
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                console.error(error)
            });
    }
}