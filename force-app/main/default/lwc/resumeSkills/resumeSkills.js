import { LightningElement, api} from 'lwc';

export default class ResumeSkills extends LightningElement {
    @api skillDetails = {
        HEADING: '',
        SKILLS: [],
        OTHERS_SKILLS: []
    }
}