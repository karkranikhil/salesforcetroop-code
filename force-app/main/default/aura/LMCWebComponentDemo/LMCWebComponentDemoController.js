({
    inputHandler : function(component, event, helper) {
        component.set("v.messageValue", event.target.value)
    },
    publishMesage: function (component, event, helper) {
        let msg = component.get("v.messageValue")
        let message ={
            lmsData:{
                value:msg
            }
        }
        component.find("SampleMessageChannel").publish(message)
    },
    handleMessage: function (component, message, helper) {
        if (message !=null && message.getParam("lmsData") !=null){
            component.set("v.messageRecieved", message.getParam("lmsData").value)
        }
    }
})
