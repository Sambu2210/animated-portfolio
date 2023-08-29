//define dom element

const heroImage = document.querySelector("#hero_animation_img");
const tl = document.querySelector("#grid-tl");
// const tr = document.querySelector("#grid-tr");
// const bl = document.querySelector("#grid-bl");
// const br = document.querySelector("#grid-br");

const tlBtn = document.querySelector("#grid-tl-btn");
// const trBtn = document.querySelector("#grid-tr-btn");
// const blBtn = document.querySelector("#grid-bl-btn");
// const brBtn = document.querySelector("#grid-br-btn");

const tlContent = document.querySelector("#grid-tl-content");
// const trContent = document.querySelector("#grid-tr-content");
// const blContent = document.querySelector("#grid-bl-content");
// const brContent = document.querySelector("#grid-br-content");

// const projecOne = document.querySelector(".p-1");
// const projecTow = document.querySelector(".p-2");
// const projecTheree = document.querySelector(".p-3");

//define color and position

const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

// let trActive = "translateX(-5vw) translateY(0)";
// let trHidden = "translateX(100vw) translateY(-100vh)";

// let blActive = "translateX(10vw) translateY(7vh)";
// let blHidden = "translateX(-100vw) translateY(100vh)";

// let brActive = "translateX(-5vw) translateY(0)";
// let brHidden = "translateX(100vw) translateY(100vh)";

//Define corner that is open

let activeCorner = "";

// Add an event listener to window object to listen for resize events
window.addEventListener("resize", handelWindowResize);

//Function that handle the style when resizeing window

function handelWindowResize(){
    switch(activeCorner){
        case "top-left":
            if(window.innerWidth <= 1100){
                 tlActive = "translateX(0) translateY(0)";
                 tlContent.style.transform = "translateX(0vw) translateY(0)";
                 tlContent.style.width = "100vw";
                 tlContent.style.height = "100vh";
                 tlContent.style.top = "0";
                 tlContent.style.display = "flex";
                 tlContent.style.alignItems = "center";
                 tlContent.style.justifyContent = "center";
                 tlContent.style.background = "var(--bg-transparent)";
                 tlContent.style.zIndex = "200";
                 tlBtn.style.zIndex = "300"
                //  trBtn.style.zIndex = "100";
                //  blBtn.style.zIndex = "100";
                //  brBtn.style.zIndex = "100";
            }
            else{
                tlActive = "translateX(5vw) translateY(0)";
                tlContent.style.transform = "translateX(5vw) translateY(0)";
                tlContent.style.width = "30vw";
                tlContent.style.height = "0";
                tlContent.style.top = "10vh";
                tlContent.style.display = "block";
            }
            break;
        case "top-right":
            if(window.innerWidth <= 1100){
                //some code
            }
            break;
        case "bottom-left":
            if(window.innerWidth <= 1100){
                //some code
            }
            break;
        case "bottom-left":
            if(window.innerWidth <= 1100){
                //some code
            }
            break;
        default:
    }
}

// Store last reverse animation, ready to played

let lastReverseAnimation = "";

// Play function animation

function playAnimation(animation, reverseAnimation){
    // Remove all the animation classes from heroImage

    heroImage.className = "";

    if(lastReverseAnimation != ""){
        heroImage.classList.add(lastReverseAnimation);
        setTimeout(function (){
            heroImage.classList.remove(lastReverseAnimation);
            heroImage.classList.add(animation);
            lastReverseAnimation = reverseAnimation;
        },200);
    }
    else{

        heroImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation;
        console.log(lastReverseAnimation);

    }
};

function playClosingAnimation(reverseAnimation){
    tlBtn.innerHTML = "About";
    // trBtn.innerHTML = "Experience";
    // blBtn.innerHTML = "Projects";
    // brBtn.innerHTML = "Contect";

    switch(activeCorner){
        case "top-left":
           tlBtn.style.background = bgColor;
           tlBtn.style.color = textColor;
           tlContent.style.transform = tlHidden;
            break;
        // case "top-right":
        //     tlBtn.style.background = bgColor;
        //     tlBtn.style.color = textColor;
        //     tlContent.style.transform = tlHidden;
        //     break;
        // case "bottom-left":
        //     tlBtn.style.background = bgColor;
        //     tlBtn.style.color = textColor;
        //     tlContent.style.transform = tlHidden;
        //     break;
        // case "bottom-left":
        //     tlBtn.style.background = bgColor;
        //     tlBtn.style.color = textColor;
        //     tlContent.style.transform = tlHidden;
        //     break;
        default:
    }
    heroImage.className = "";
    lastReverseAnimation = "";
    activeCorner = "";
    heroImage.classList.add(reverseAnimation);
    setTimeout(function () {
        heroImage.classList.remove(reverseAnimation);
    }, 200);
}

//Onclick corner button function
tlBtn.onclick = function(){
    if(activeCorner ==="top-left"){
        playClosingAnimation("reverse-animation-top-left");
    }
    else{
        // trBtn.innerHTML = "Experiecne";
        // blBtn.innerHTML = "Projects";
        // brBtn.innerHTML = "Contact";

        activeCorner = "top-left";
        tlBtn.innerHTML = "&uarr;<br/>About";
        console.log(activeCorner);
        handelWindowResize("reverse-animation-top-left");
        playAnimation("animate-top-left","reverse-animate-top-left");

        //Change background color
        tlBtn.style.background = bgColorAlt;
        // trBtn.style.background = bgColor;
        // blBtn.style.background = bgColor;
        // brBtn.style.background = bgColor;

        //Change text color
        tlBtn.style.color = textColorAlt;
        // trBtn.style.background = textColor;
        // blBtn.style.background = textColor;
        // brBtn.style.background = textColor;

        //change position of the corner content

        tlContent.style.transform = tlActive;
        // trContent.style.transform = trHidden;
        // brContent.style.transform = brHidden;
        // blContent.style.transform = blHidden;
    }
}

// trBtn.onclick = function(){
//     if(activeCorner=="top-right"){
//         playClosingAnimation("reverse-animation-top-right");
//     }
//     else{
//         tlBtn.innerHTML = "About";
//         blBtn.innerHTML = "Projects";
//         brBtn.innerHTML = "Contact";

//         activeCorner = "top-right";
//         trBtn.innerHTML = "&uarr;<br/>Experience";
//         handelWindowResize();
//         playedAnimation("animation-top-right","reverse-animation-top-right");

//         //Change background color
//         tlBtn.style.background = bgColor;
//         trBtn.style.background = bgColorAlt;
//         blBtn.style.background = bgColor;
//         brBtn.style.background = bgColor;

//         //Change text color
//         tlBtn.style.background = textColor;
//         trBtn.style.background = textColorAlt;
//         blBtn.style.background = textColor;
//         brBtn.style.background = textColor;

//         //change position of the corner content

//         tlContent.style.tlansform = tlHidden;
//         trContent.style.transform = trActive;
//         brContent.style.transform = brHidden;
//         blContent.style.transform = blHidden;
//     }
// }

// blBtn.onclick = function(){
//     if(activeCorner=="bottom-left"){
//         playClosingAnimation("reverse-animation-bottom-left");
//     }
//     else{
//         tlBtn.innerHTML = "About";
//         trBtn.innerHTML = "Experiecne";
//         brBtn.innerHTML = "Contact";

//         activeCorner = "bottom-left";
//         blBtn.innerHTML = "Projects<br/>&darr";
//         handelWindowResize("reverse-animation-bottom-left");
//         playedAnimation("animation-bottom-left","reverse-animation-bottom-left");

//         //Change background color
//         tlBtn.style.background = bgColor;
//         trBtn.style.background = bgColor;
//         blBtn.style.background = bgColorAlt;
//         brBtn.style.background = bgColor;

//         //Change text color
//         tlBtn.style.background = textColor;
//         trBtn.style.background = textColor;
//         blBtn.style.background = textColorAlt;
//         brBtn.style.background = textColor;

//         //change position of the corner content

//         tlContent.style.tlansform = tlHidden;
//         trContent.style.transform = trHidden;
//         brContent.style.transform = brHidden;
//         blContent.style.transform = brActive;
//     }
// }

// brBtn.onclick = function(){
//     if(activeCorner=="bottom-right"){
//         playClosingAnimation("reverse-animation-bottom-right");
//     }
//     else{
//         tlBtn.innerHTML = "About";
//         trBtn.innerHTML = "Experience";
//         blBtn.innerHTML = "Projects";

//         activeCorner = "bottom-right";
//         brBtn.innerHTML = "Contact<br/>&darr;";
//         handelWindowResize();
//         playedAnimation("animation-bottom-right","reverse-animation-bottom-right");

//         //Change background color
//         tlBtn.style.background = bgColor;
//         trBtn.style.background = bgColor;
//         blBtn.style.background = bgColor;
//         brBtn.style.background = bgColorAlt;

//         //Change text color
//         tlBtn.style.background = textColor;
//         trBtn.style.background = textColor;
//         blBtn.style.background = textColor;
//         brBtn.style.background = textColorAlt;

//         //change position of the corner content

//         tlContent.style.tlansform = tlHidden;
//         trContent.style.transform = trHidden;
//         brContent.style.transform = brHidden;
//         blContent.style.transform = blActive;
//     }
// }

