//Define dom element

const toggleButton = document.querySelector("#toggle-btn");
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defualtMode = "light-mode";
// Load the user's preffered color mode from local storage

function loadColorMode(){
    const colorMode = localStorage.getItem(storageKey);
    root.classList.add(colorMode || defualtMode);
    updateToggleButton();

}

loadColorMode();

// Toggle the color mode
toggleButton.addEventListener("click",()=>{
    saveColorMode();
});

// save the user's preffered color mode from local storage

function saveColorMode(){
    // check if the root element has a class of "dark-mode". If yes then the current mode is switched to light.
    const currentMode = root.classList.contains("dark-mode") ? "light-mode" : "dark-mode";
    root.classList.remove("dark-mode", "light-mode");
    root.classList.add(currentMode);
    localStorage.setItem(storageKey,currentMode);
    updateToggleButton();  
}
function updateToggleButton(){
    if(root.classList.contains('dark-mode')){
        toggleButton.style.backgroundImage = "var(--moon)";
    } 
    else{
        toggleButton.style.backgroundImage = "var(--sun)";
    }   
}



