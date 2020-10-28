import { createElement } from 'lwc';
import MyChildComp from 'c/myChildComp';
const USER_DATA = {
    Id: '1',
    Name: 'Nikhil'
};
const MESSAGE = 'No user data available.';


describe('testing of my child component', ()=>{
    it('renders name based on public property', ()=>{
        const element = createElement('c-my-child-comp', {
            is: MyChildComp
        })
        element.userDetail = USER_DATA
        document.body.appendChild(element)
        const divElem = element.shadowRoot.querySelector('.userName')
        expect(divElem.textContent).toBe(USER_DATA.Name)
    })

    it('render message if userDetails not available', ()=>{
        const element = createElement('c-my-child-comp', {
            is: MyChildComp
        })
        document.body.appendChild(element)
        const pElem = element.shadowRoot.querySelector('p')
        expect(pElem.textContent).toBe(MESSAGE)
    })
})