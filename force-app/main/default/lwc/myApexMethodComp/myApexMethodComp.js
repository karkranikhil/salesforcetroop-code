import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/accountController.getAccountList'
export default class MyApexMethodComp extends LightningElement {
    accounts
    error
    loadAccounts(){
        getAccountList().then(result=>{
            console.log(result)
            this.accounts = result
            this.error = null
        }).catch(error=>{
            this.error = error
            this.accounts = null
        })
    }
}