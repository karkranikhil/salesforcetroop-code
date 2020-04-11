import { LightningElement } from 'lwc';

export default class BusinessCardParentComponent extends LightningElement {
    userDetails = [
        {
            name: 'John Doe',
            title: 'CEO & Founder',
            company: 'Harvard University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team1.jpg'
        },
        {
            name: 'Steve Smith',
            title: 'CEO & Founder',
            company: 'Standford University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team2.jpg'
        },
        {
            name: 'David Warner',
            title: 'CEO & Founder',
            company: 'Sydney University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team3.jpg'
        },
        {
            name: 'Peter Parker',
            title: 'CEO & Founder',
            company: 'Melbourne University, example',
            buttontext: 'Contact',
            imageUrl: 'https://www.w3schools.com/w3images/team4.jpg'
        }

    ]
}