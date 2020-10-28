import { LightningElement, wire } from 'lwc';
import { NavigationMixin, CurrentPageReference } from 'lightning/navigation'
export default class NavigateToComponents extends NavigationMixin(LightningElement) {
    @wire(CurrentPageReference)
    pageReference

    get PageRef(){
        console.log("this.pageReference", JSON.stringify(this.pageReference))
        return this.pageReference.state.c__test ? this.pageReference.state.c__test: ''
    }


    handleAuraNavigate(){
        this[NavigationMixin.Navigate]({
            type: "standard__component",
            attributes: {
                componentName: "c__NavigateToAura"
            },
            state: {
                c__recordId: "1234567"
            }
        })
    }

    navigateToVfPage(){
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/apex/navigation_vf_page"
            }
        }).then(generateUrl=>{
            console.log(generateUrl)
            window.open(generatedUrl, "_blank"); //  window.open(generatedUrl, "_self");
        })
    }

    handlerLwcNavigate(){
        var defination = {
            componentDef:"c:navigationLwcTarget",
            attributes: {
                recordId: '87686868687'
            }
        }
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: '/one/one.app#' + btoa(JSON.stringify(defination))
            }
        })
    }

    /** For communities */
   
}

