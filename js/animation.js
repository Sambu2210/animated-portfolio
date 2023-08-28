//define dom element

const heroImage = document.querySelector("hero-animation-img");
const tl = document.querySelector("#grid-tl");
const tr = document.querySelector("#grid-tr");
const bl = document.querySelector("#grid-bl");
const br = document.querySelector("#grid-br");

const tlBtn = document.querySelector("#grid-tl-btn");
const trBtn = document.querySelector("#grid-tr-btn");
const blBtn = document.querySelector("#grid-bl-btn");
const brBtn = document.querySelector("#grid-br-btn");

const tlContent = document.querySelector("#grid-tl-content");
const trContent = document.querySelector("#grid-tr-content");
const blContent = document.querySelector("#grid-bl-content");
const brContent = document.querySelector("#grid-br-content");

const projecOne = document.querySelector(".p-1");
const projecTow = document.querySelector(".p-2");
const projecTheree = document.querySelector(".p-3");

//define color and position

const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";