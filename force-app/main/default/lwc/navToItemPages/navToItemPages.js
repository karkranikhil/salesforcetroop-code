import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavToItemPages extends NavigationMixin(LightningElement) {

    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Fundamentals'
            }
        });
    }
}