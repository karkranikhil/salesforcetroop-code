import { LightningElement, api} from 'lwc';

export default class ResumeLangAndInterest extends LightningElement {
    @api details = {
        HEADING: '',
        LIST: []
    }
    get isLanguages() {
        return this.details.HEADING === 'Languages'
    }

    get className() {
        return `slds-var-m-bottom_medium ${this.details.HEADING === 'Languages' ? '' : 'inline_block'}`
    }
}