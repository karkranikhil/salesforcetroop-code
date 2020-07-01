public with sharing class apexMethodController {
    public static List<Account> getAccountList(){
        return [SELECT ID, Name, AnnualRevenue FROM Account WHERE AnnualRevenue !=null LIMIT 5];
    }
}
