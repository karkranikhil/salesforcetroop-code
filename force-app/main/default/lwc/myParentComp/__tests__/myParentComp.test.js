import {createElement} from 'lwc'
import MyParentComp from 'c/myParentComp'
const USER_RESULT = 'Nikhil';
describe('c-my-parent-comp component testing', ()=>{

    beforeEach(()=>{
        const element = createElement('c-my-parent-comp', {
            is: MyParentComp
        })
        document.body.appendChild(element)
    })
    it('render child component', ()=>{
        const element = document.querySelector('c-my-parent-comp')
        const childCompElem = element.shadowRoot.querySelectorAll('c-my-child-comp')
        expect(childCompElem.length).toBe(1)
    })
    it('set user data property correctly',()=>{
        const element = document.querySelector('c-my-parent-comp')
        const childCompElem = element.shadowRoot.querySelector('c-my-child-comp')
        expect(childCompElem.userDetail.Name).toBe(USER_RESULT)
    })
    
})