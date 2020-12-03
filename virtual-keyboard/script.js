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
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Add classes to main elements
        this.elements.main.classList.add("keyboard", "1keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");

        this.elements.keysContainer.appendChild(this._createKeys());

        this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        // Automatically use keyboard for elements with .use-keyboard-input
        // document.querySelectorAll(".use-keyboard-input").forEach(element => {
        //     element.addEventListener("focus", () => {
        //         this.open(element.value, currentValue => {
        //             element.value = currentValue;
        //         });
        //     });
        // });

        document.querySelector(".use-keyboard-input").addEventListener("focus", () => {
            this.open(element.value, currentValue => {
                element.value = currentValue;
            });
        });

    },

    //private methods

    // for kreating all keys
    _createKeys(){
        const fragment = document.createDocumentFragment();
        const keyLoyout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps",           
            "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?", 
            "space"
        ]

        //Create HTML place for icon
        const createIconHTML = (icon_name)=>{
            return `<i class="material-icons">${icon_name}</i>`;
        }

        keyLoyout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    });

                    break;

                    case "caps":
                        keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                        keyElement.innerHTML = createIconHTML("keyboard_capslock");
    
                        keyElement.addEventListener("click", () => {
                            this._toggleCapsLock();
                            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                        });
    
                        break;
                        
                    case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += "\n";
                        this._triggerEvent("oninput");
                    });

                    break;
                    
                    
                    case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");

                    keyElement.addEventListener("click", () => {
                        this.properties.value += " ";
                        this._triggerEvent("oninput");
                    });

                    break;

                    case "done":
                        keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                        keyElement.innerHTML = createIconHTML("check_circle");
    
                        keyElement.addEventListener("click", () => {
                            this.close();
                            this._triggerEvent("onclose");
                        });
    
                        break;

                        default:
                            keyElement.textContent = key.toLowerCase();
        
                            keyElement.addEventListener("click", () => {
                                this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                                this._triggerEvent("oninput");
                            });
        
                            break;
                    }


                    fragment.appendChild(keyElement);

                    if (insertLineBreak) {
                        fragment.appendChild(document.createElement("br"));
                    }
            
        })
        return fragment;
    },

    // for triggering oninput/onclose
    _triggerEvent(handlerName){
        console.log("Event triggered! Event name" + handlerName);
    },

    // for determination whether we need key in Upper case
    _toggleCapsLock(){
        this.properties.capsLock = !this.properties.capsLock;
        for(let key of this.elements.keys){
            if(key.childElementCount === 0){
                key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            }
        }
    },

    open(initialValue, oninput, onclose){

    },

    close(){

    },
} 

// window.addEventListener("DOMContentLoaded", function(){
//     keyboard.init();
// });
 
keyboard.init();