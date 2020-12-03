const keyboard = {
    elements: {
        main: null,
        keyContainer: null,
        keys: [],
    },

    eventHandlers:{
        oninput:null, // For the keyboard opening
        onclose: null, //For the keyboard hiding
    },

    //for the key
    properties:{
        value:"",
        capsLock: false,
    },

    init(){

    },

    //private methods

    // for kreating all keys
    _createKeys(){

    },

    // for triggering oninput/onclose
    _triggerEvent(handlerName){
        console.log("Event triggered! Event name" + handlerName);
    },

    // for determination whether we need key in Upper case
    _toggleCapsLock(){
        console.log("CapsLock toggled!");
    },

    open(initialValue, oninput, onclose){

    },

    close(){

    },
} 