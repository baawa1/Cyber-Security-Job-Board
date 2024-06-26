window.addEventListener('DOMContentLoaded', (event) => {
    CometChatWidget.init({
        "appID": "APP_ID",
        "appRegion": "APP_REGION",
        "authKey": "AUTH_KEY"
    }).then(response => {
        console.log("Initialization completed successfully");
        //You can now call login function.
        CometChatWidget.login({
            "uid": "UID"
        }).then(response => {
            CometChatWidget.launch({
                "widgetID": "WIDGET_ID",
                "target": "#cometchat",
                "roundedCorners": "true",
                "height": "600px",
                "width": "800px",
                "defaultID": 'superhero1', //default UID (user) or GUID (group) to show,
                     "defaultType": 'user' //user or group
            });
        }, error => {
            console.log("User login failed with error:", error);
            //Check the reason for error and take appropriate action.
        });
    }, error => {
        console.log("Initialization failed with error:", error);
        //Check the reason for error and take appropriate action.
            });



});


