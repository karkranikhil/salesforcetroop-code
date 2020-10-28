import { LightningElement, wire, api } from 'lwc';
import { NavigationMixin, CurrentPageReference } from 'lightning/navigation';
import getSingleAccount from '@salesforce/apex/testController.getSingleAccount';
import getSingleContact from '@salesforce/apex/testController.getSingleContact';

//The lightning/pageReferenceUtils module provides the encodeDefaultFieldValues() and decodeDefaultFieldValues() functions, which encode default field values into a string and decode them. Assign an encoded string to the pageReference.state.defaultFieldValues attribute in a standard__objectPage page reference.
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class TestLwc extends NavigationMixin(LightningElement)  {
    @api recordId
    @wire(CurrentPageReference)
    pageReference;


    get PageRef() {
        //?c__test=testvalue
        console.log("this.pageReference", JSON.stringify(this.pageReference))
        return this.pageReference.state.c__test ? this.pageReference.state.c__test : ''
    }

/******Navigation to standard__namedPage *******/
    navigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        });
    }
    navigateToHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        });
    }



/******Navigation to standard__objectPage *******/
    navigateToFilesHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        });
    }
    navigateToNewContactPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }
    navigateToNewContactWithDefaults() {
        const defaultValues = encodeDefaultFieldValues({
            FirstName: 'Salesforce',
            LastName: 'Troop',
            LeadSource: 'Other'
        });

        // eslint-disable-next-line no-console
        console.log(defaultValues);

        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }
    navigateToList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }

    /******Navigation to standard__navItemPage *******/
    navigateToTab() {
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Fundamentals'
            }
        });
    }



    /******Navigation to standard__recordPage *******/
    @wire(getSingleContact) contact;

    navigateToContact() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.data.Id,
                objectApiName: 'Contact',
                actionName: 'view'
            }
        });
    }

    navigateToEdit() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.contact.data.Id,
                objectApiName: 'Contact',
                actionName: 'edit'
            }
        });
    }

    navigateToCustomRecordPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: 'a0E2w0000002LtCEAU',
                objectApiName: 'Broker__c',
                actionName: 'view'
            }
        });
    }


    
    /******Navigation to standard__recordRelationshipPage *******/

    @wire(getSingleAccount) account;
    navigateToRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.account.data.Id,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            }
        });
    }

    /******Navigation to standard__webPage *******/
    navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://www.salesforcetroop.com/"
            }
        });
    }

    /********Navigation to Component ********/
    /**AURA */
    handleAuraNavigate() {
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__NavigateToAura"
            },
            state: {
                c__recordId: this.recordId
            }
        });
    }

    /********Navigation to LWC Component ********/

    handleLwcNavigate() {
        console.log(this.recordId)
        var definition = {
            componentDef: "c:testChildLwc",
            attributes: {
                recordId: this.recordId
            }
        };
        // Base64 encode the compDefinition JS object
        // var encodedCompDef = btoa(JSON.stringify(compDefinition));
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(definition))
            }
        });
    }

        /*****Navigate to VF page */
    navigateToVFPage() {
        this[NavigationMixin.GenerateUrl]({
            type: 'standard__webPage',
            attributes: {
                url: '/apex/navigation_vf_page'
            }
        }).then(generatedUrl => {
            console.log(generatedUrl)
            window.open(generatedUrl);
            // to open in same window tab use  window.open(generatedUrl, "_self");
        });
    }
}