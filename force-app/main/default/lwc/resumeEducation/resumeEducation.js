import { LightningElement, api } from 'lwc';
import SOCIAL from '@salesforce/resourceUrl/SOCIAL';
export default class ResumeEducation extends LightningElement {
    educationIcon = SOCIAL + '/SOCIAL/education.svg'
    @api educationDetails = {
        HEADING: '',
        EDUCATION_DATA: []
    }
}