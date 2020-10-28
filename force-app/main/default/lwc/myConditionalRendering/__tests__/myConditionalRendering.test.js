import { createElement } from 'lwc';
import MyConditionalRendering from 'c/myConditionalRendering';

describe('c-my-conditional-rendering suite', ()=>{

    beforeEach(() => {
        const element = createElement('c-my-conditional-rendering', {
            is: MyConditionalRendering
        })
        document.body.appendChild(element)
    })
    it("don't show the password", ()=>{
        const element = document.querySelector('c-my-conditional-rendering')
        const passwordElement = element.shadowRoot.querySelector('.userInfo')
        expect(passwordElement.textContent).toBe('My Password is **********')
    })

    it("show user password when checkbox is checked", ()=>{
        const element = document.querySelector('c-my-conditional-rendering')
        const inputElement = element.shadowRoot.querySelector('lightning-input');
        inputElement.checked = true
        inputElement.dispatchEvent(new CustomEvent('change'))
        return Promise.resolve().then(() => {
            const passwordElement = element.shadowRoot.querySelector('.userInfo')
            expect(passwordElement.textContent).toBe('My Password is Nikhilkarkra')
        })
    })

    
})