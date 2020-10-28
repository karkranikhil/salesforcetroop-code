import {createElement} from 'lwc'
import MyApexMethodComp from 'c/myApexMethodComp'
import getAccountList from '@salesforce/apex/accountController.getAccountList'
const APEX_ACCOUNTLIST_ERROR = require('./data/accountsError.json');
const APEX_ACCOUNTLIST_SUCCESS = require('./data/accountsList.json');

//jest.mock(moduleName, factory, options)
jest.mock('@salesforce/apex/accountController.getAccountList',
()=>({
    default:jest.fn()
}),
{virtual:true}
)
describe('testing imperative apex method', ()=>{

    beforeEach(()=>{
        const element = createElement('c-my-apex-method-comp', {
            is: MyApexMethodComp
        })
        document.body.appendChild(element)
    })
    it('renders accounts returned from imperative apex call',()=>{
        getAccountList.mockResolvedValue(APEX_ACCOUNTLIST_SUCCESS)
        const element = document.querySelector('c-my-apex-method-comp')
        const buttonElement = element.shadowRoot.querySelector('lightning-button')
        buttonElement.click()
        return new Promise(setImmediate).then(()=>{
            const detailEls = element.shadowRoot.querySelectorAll('p.accountName')
            expect(detailEls.length).toBe(APEX_ACCOUNTLIST_SUCCESS.length)
            expect(detailEls[0].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[0].Name)
            expect(detailEls[1].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[1].Name)
        })
    })
    it('renders the error when apex return an error',()=>{
        getAccountList.mockRejectedValue(APEX_ACCOUNTLIST_ERROR)
        const element = document.querySelector('c-my-apex-method-comp')
        const buttonElement = element.shadowRoot.querySelector('lightning-button')
        buttonElement.click()
        return new Promise(setImmediate).then(() => {
            const errorElement = element.shadowRoot.querySelector('.error')
            expect(errorElement).not.toBeNull()
            
        })
    })
})