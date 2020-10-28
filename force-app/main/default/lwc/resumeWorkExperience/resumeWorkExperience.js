import { LightningElement, api } from 'lwc';

export default class ResumeWorkExperience extends LightningElement {
    @api workExperienceDetails ={
        HEADING: '',
        EXPERIENCES: []
    }
}