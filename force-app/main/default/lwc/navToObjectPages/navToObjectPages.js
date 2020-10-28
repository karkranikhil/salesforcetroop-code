import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class NavToObjectPages extends NavigationMixin(LightningElement) {

    navigateToFilesHome(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }

    navigateToNewContactPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        })
    }

    navigateToNewContactWithDefaults(){
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Salesforce',
            LastName:'Troop',
            LeadSource:'Other'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state:{
                defaultFieldValues:defaultValues
            }
        })
    }

    navigateToList(){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state:{
                filterName:'Recent'
            }
        })
    }

}