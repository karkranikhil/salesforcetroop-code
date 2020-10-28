import {createElement} from 'lwc'
import MyFirstComponent from 'c/myFirstComponent'

describe('c-my-first-component test suite', ()=>{
    
    test('display first greeting', ()=>{
        const element = createElement('c-my-first-component', {
            is:MyFirstComponent
        })
        document.body.appendChild(element) 
        const firstDiv = element.shadowRoot.querySelector('div.first')
        expect(firstDiv.textContent).toBe('Hello, World!')
    })
    test('display second greeting', () => {
        const element = createElement('c-my-first-component', {
            is: MyFirstComponent
        })
        document.body.appendChild(element)
        const secondDiv = element.shadowRoot.querySelector('div.second')
        expect(secondDiv.textContent).toBe('My, World!')
    })
})