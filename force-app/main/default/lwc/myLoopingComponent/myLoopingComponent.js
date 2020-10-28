import { LightningElement } from 'lwc';

export default class MyLoopingComponent extends LightningElement {
    userList = [
        {
            Id: '1',
            Name: 'Nikhil'
        },
        {
            Id: '2',
            Name: 'John'
        },
        {
            Id: '3',
            Name: 'Mike'
        }
    ];
    
}