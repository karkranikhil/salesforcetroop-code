import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavToRecordPages extends NavigationMixin(LightningElement) {

    navigateToContact(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0032w000008HSNoAAO',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    navigateToContactEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: '0032w000008HSNoAAO',
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        })
    }

    navigateToCustomRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: 'a0E2w0000002LtCEAU',
                objectApiName: 'Broker__c',
                actionName: 'view'
            }
        })
    }

}