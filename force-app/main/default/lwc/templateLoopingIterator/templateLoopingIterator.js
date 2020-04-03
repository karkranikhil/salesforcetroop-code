import { LightningElement } from 'lwc';

export default class TemplateLoopingIterator extends LightningElement {
    ceoList = [
        {
            id: 1,
            company: "Google",
            name: "Sundar Pichai"
        },
        {
            id: 2,
            company: "Apple Inc.",
            name: "Tim cook"
        },
        {
            id: 3,
            company: "Facebook",
            name: "Mark Zuckerberg"
        },
        {
            id: 4,
            company: "Amazon.com",
            name: "Jeff Bezos"
        },
        {
            id: 5,
            company: "Capgemini",
            name: "Paul Hermelin"
        }
    ];
}