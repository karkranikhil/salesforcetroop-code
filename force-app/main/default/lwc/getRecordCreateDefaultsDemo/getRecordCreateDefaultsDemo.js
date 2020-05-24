import { LightningElement, wire } from 'lwc';
import { getRecordCreateDefaults} from 'lightning/uiRecordApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetRecordCreateDefaultsDemo extends LightningElement {
    tableHeader=[]
    tableBody=[]
    @wire(getRecordCreateDefaults, { objectApiName: ACCOUNT_OBJECT})
    wiredRecordDefaults({data, error}){
        if(data){
            console.log(JSON.stringify(data))
            const { fields } = data.objectInfos.Account
            this.tableHeader= ['Api Name', 'Data Type', 'Label', 'Length', 'Is Required']
            this.tableBody = Object.keys(fields).map(item=>{
                let field=fields[item]
                const {apiName, dataType, label, length, required} = field
                return {apiName, dataType, label, length, required}
            })
            console.log(JSON.stringify(this.tableHeader))
            console.log(JSON.stringify(this.tableBody))
        }
        if(error){
            console.error(error)
        }
    }
}