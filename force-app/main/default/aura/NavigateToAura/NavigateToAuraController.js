({
    init : function(component) {
        var myPageRef = component.get("v.pageReference")
        var id = myPageRef.state.c__recordId
        component.set("v.id", id)
    }
})
