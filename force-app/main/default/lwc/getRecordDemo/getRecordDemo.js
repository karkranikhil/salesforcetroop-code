import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_NAME_FIELD from '@salesforce/schema/Account.Owner.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';

let FIELDS = ['Account.Name', 'Account.Industry', 'Account.Phone', 'Account.AnnualRevenue', 'Account.Owner.Name']
export default class GetRecordDemo extends LightningElement {
    @api recordId;
    result = {}

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS})
    account;

    get name(){
        return getFieldValue(this.account.data, NAME_FIELD)
    }
    get phone() {
        return getFieldValue(this.account.data, PHONE_FIELD)
    }
    get owner() {
        return getFieldValue(this.account.data, OWNER_NAME_FIELD)
    }
    get industry() {
        return getFieldValue(this.account.data, INDUSTRY_FIELD)
    }
    get revenue(){
        return getFieldDisplayValue(this.account.data, ANNUAL_REVENUE_FIELD)
    }

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ data, error }) {
        if (data) {
            const { fields } = data
            Object.keys(fields).forEach(item => {
                let value = fields[item] && fields[item].displayValue ? fields[item].displayValue : fields[item].value
                this.result = { ...this.result, [item]: value }
            })
            console.log(JSON.stringify(data))
        }
        if (error) {
            console.error(error)
        }
    }
}