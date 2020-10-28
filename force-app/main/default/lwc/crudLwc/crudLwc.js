import { LightningElement, track } from 'lwc';
import { createRecord, updateRecord, deleteRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';
import testHandler from '@salesforce/apex/accountController.testHandler'
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class CrudLwc extends LightningElement {
    @track accountId;
    @track accountName;
    @track account;

    handleChange(event) {
        console.log(event.target.value);
        this.accountName = event.target.value;
    }

    saveAccountRec() {
        console.log(this.accountName);
        console.log(this.accountId);
        if (this.accountId == null || this.accountId === "") {
            console.log('createAcount called');
            this.createAccount();
        } else {
            console.log('updateAcount called');
            this.updateAccount();
        }
    }

    createAccount() {
        console.log('createAccount 2');
        const fields = {};
        fields[ACCOUNT_NAME_FIELD.fieldApiName] = this.accountName;
        console.log('this.accountName: ' + this.accountName);
        const recordInput = { apiName: ACCOUNT_OBJECT.objectApiName, fields };
        createRecord(recordInput)
            .then(Account => {
                console.log('createAccount SAVED');
                console.log(JSON.stringify(Account));
                this.accountId = Account.id;
                this.accountName = getFieldValue(Account, ACCOUNT_NAME_FIELD);

                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                console.log(JSON.stringify(error));
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating account ERROR',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }

    updateAccount() {
        console.log('updateAccount');
        let record = {
            fields: {
                Id: this.accountId,
                [ACCOUNT_NAME_FIELD]: this.newAccountName
            },
        };

        updateRecord(record)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account Updated',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error updating account',
                        message: error.message.body,
                        variant: 'error',
                    }),
                );
            });
    }


    deleteAccount() {

        deleteRecord(this.accountId)
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Account Deleted',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error deleting account',
                        message: error.message.body,
                        variant: 'error',
                    }),
                );
            });


    }

    newRecord = { "Id": "a0x010000004L7XAAU", "FirstName": "Nikhil"}
    newRecordList = [{ "Id": "a0x010000004L7XAAU", "FirstName": "Nikhil" }]

    trigger(){
        testHandler({ newRecord: this.newRecord, newRecordList: this.newRecordList })
            .then(result => {
                console.log(result)
            })
    }
    
}