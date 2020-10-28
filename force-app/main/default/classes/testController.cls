public with sharing class testController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountById(Id accId) {
        return [SELECT Id, Name, Phone FROM Account WHERE Id=:accId];
    } 

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [SELECT Id, Name, AnnualRevenue FROM Account WHERE AnnualRevenue != null LIMIT 5 ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [
            SELECT Id, Name FROM Contact
        ];
    }
    @AuraEnabled(cacheable=true)
    public static Account getSingleAccount() {
        return [
            SELECT Id, Name, Phone, Type
            FROM Account
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }
     @AuraEnabled(cacheable=true)
    public static Contact getSingleContact() {
        return [
            SELECT Id, Name, Title, Phone, Email
            FROM Contact
            WITH SECURITY_ENFORCED
            LIMIT 1
        ];
    }
}
