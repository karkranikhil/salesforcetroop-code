import { LightningElement, api} from 'lwc';
import SOCIAL from '@salesforce/resourceUrl/SOCIAL';
export default class ResumeAwards extends LightningElement {
    awardsIcon = SOCIAL + '/SOCIAL/awards.svg'
    certIcon = SOCIAL + '/SOCIAL/certification.svg'
    @api details = {
        HEADING: '',
        LIST: ''
    }
    get getIcon() {
        return this.details.HEADING === 'Awards' ? this.awardsIcon : this.certIcon
    }
    get className() {
        return this.details.HEADING === 'Awards' ? `fontWeight700 font16` : `fontWeight700 font14`
    }
}