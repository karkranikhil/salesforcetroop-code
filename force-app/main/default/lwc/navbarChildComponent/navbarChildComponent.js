import { LightningElement, api } from 'lwc';

export default class NavbarChildComponent extends LightningElement {
    @api navList
    handlerNavSelection(event){
        const selectEvent = new CustomEvent('selection',{
            detail:event.target.name
        })
        this.dispatchEvent(selectEvent)
    }
}