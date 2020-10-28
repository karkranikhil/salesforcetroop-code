import { createElement } from 'lwc';
import MyWireComponent from 'c/myWireComponent'
import { registerApexTestWireAdapter } from '@salesforce/sfdx-lwc-jest';

import getContactLists from '@salesforce/apex/ContactController.getContactLists';

const mockGetContactLists = require('./data/getContactLists.json')
const mockGetContactListNoRecord = require('./data/getContactListNoRecord.json')

const getContactListAdapter = registerApexTestWireAdapter(getContactLists)


describe('my-wire-component testing', ()=>{

    beforeEach(()=>{
        const element = createElement('c-my-wire-component', {
            is: MyWireComponent
        })
        document.body.appendChild(element)
    })
    afterEach(()=>{
        jest.clearAllMocks()
    })

    it("renders correct records", ()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.emit(mockGetContactLists)
        return Promise.resolve().then(()=>{
            const pElem = element.shadowRoot.querySelectorAll('p')
            expect(pElem.length).toBe(mockGetContactLists.length)
            expect(pElem[0].textContent).toBe(mockGetContactLists[0].Name)
        })
    })
    it("renders no item when no records are available", ()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.emit(mockGetContactListNoRecord)
        return Promise.resolve().then(() => {
            const pElem = element.shadowRoot.querySelectorAll('p')
            expect(pElem.length).toBe(mockGetContactListNoRecord.length)
        })
    })

    it("getCOntactList @wire error", ()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.error()
        return Promise.resolve().then(() => {
            const errorElem = element.shadowRoot.querySelector('.error')
            expect(errorElem.textContent).not.toBeNull()
        })
    })

})