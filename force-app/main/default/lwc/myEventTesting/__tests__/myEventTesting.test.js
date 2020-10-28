import {createElement} from 'lwc'
import MyEventTesting from 'c/myEventTesting'

describe('c-my-event-testing suite', ()=>{
    beforeEach(()=>{
        const element = createElement('c-my-event-testing', {
            is: MyEventTesting
        })
        document.body.appendChild(element)
    })
    test('Test default greet value should be Hello, World!', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const text = element.shadowRoot.querySelector('p')
        expect(text.textContent).toBe('Hello, World!')
    })
    test('Test default greet value should not be Hello, Nikhil!', () => {
        const element = document.querySelector('c-my-event-testing')
        const text = element.shadowRoot.querySelector('p')
        expect(text.textContent).not.toBe('Hello, Nikhil!')
    })

    test('test input change event value', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const inputElement = element.shadowRoot.querySelector('lightning-input')
        inputElement.value='Salesforce'
        inputElement.dispatchEvent(new CustomEvent('change'))
        const text = element.shadowRoot.querySelector('p');
        return Promise.resolve().then(()=>{
            expect(text.textContent).toBe('Hello, Salesforce!')
        })
    })
})