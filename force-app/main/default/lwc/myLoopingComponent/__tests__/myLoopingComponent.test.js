import { createElement } from 'lwc';
import MyLoopingComponent from 'c/myLoopingComponent';
const EXPECTED =[
    'Nikhil',
    'John',
    'Mike'
]
describe('c-my-looping-component suite', ()=>{
    beforeEach(()=>{
        const element = createElement('c-my-looping-component', {
            is: MyLoopingComponent
        })
        document.body.appendChild(element)
    })

    test('check user list length', ()=>{
        const element = document.querySelector('c-my-looping-component')
        const userDetails = element.shadowRoot.querySelectorAll('.forEachList>li')
        expect(userDetails.length).toBe(3)
    })
    test('display user list in specific order', () => {
        const element = document.querySelector('c-my-looping-component')
        const userDetails = Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'))
        const userList = userDetails.map(li=>li.textContent)
        expect(userList.length).toBe(3)
        expect(userList).toEqual(EXPECTED)
    })

    test("displays first and last text in the iterator loop",()=>{
        const element = document.querySelector('c-my-looping-component')
        const firstDiv = element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child')
        expect(firstDiv.textContent).toBe('Start of list')
        const lastDiv = element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child')
        expect(lastDiv.textContent).toBe('End of list')
    })
})