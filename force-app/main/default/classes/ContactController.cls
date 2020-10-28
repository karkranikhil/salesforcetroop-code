public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactLists(){
        return [SELECT NAME FROM Contact];
    }
}
