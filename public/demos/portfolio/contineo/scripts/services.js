// Get buttons
// --> WEB
var btn_web_low = document.getElementById("btn_web_low");
var btn_web_medium = document.getElementById("btn_web_medium");
var btn_web_high = document.getElementById("btn_web_high");
// --> SERVER
var btn_svr_low = document.getElementById("btn_svr_low");
var btn_svr_high = document.getElementById("btn_svr_high");

// STARTUP WEB
document.getElementById('weblow').hidden = false;
document.getElementById('webmed').hidden = true;
document.getElementById('webhigh').hidden = true;

// STARTUP SERVER
document.getElementById('svrlow').hidden = false;
document.getElementById('svrhigh').hidden = true;

// WEB HOSTING
function Web_Low() {
    document.getElementById('weblow').hidden = false;
    document.getElementById('webmed').hidden = true;
    document.getElementById('webhigh').hidden = true;

    btn_web_low.classList.add("selectedTier");
    btn_web_medium.classList.remove("selectedTier");
    btn_web_high.classList.remove("selectedTier");
}

function Web_Medium() {
    document.getElementById('weblow').hidden = true;
    document.getElementById('webmed').hidden = false;
    document.getElementById('webhigh').hidden = true;

    btn_web_low.classList.remove("selectedTier");
    btn_web_medium.classList.add("selectedTier");
    btn_web_high.classList.remove("selectedTier");
}

function Web_High() {
    document.getElementById('weblow').hidden = true;
    document.getElementById('webmed').hidden = true;
    document.getElementById('webhigh').hidden = false;

    btn_web_low.classList.remove("selectedTier");
    btn_web_medium.classList.remove("selectedTier");
    btn_web_high.classList.add("selectedTier");
}

// ONLINE SERVER
function Svr_Low() {
    document.getElementById('svrlow').hidden = false;
    document.getElementById('svrhigh').hidden = true;

    btn_svr_low.classList.add("selectedTier");
    btn_svr_high.classList.remove("selectedTier");
}

function Svr_High() {
    document.getElementById('svrlow').hidden = true;
    document.getElementById('svrhigh').hidden = false;

    btn_svr_low.classList.remove("selectedTier");
    btn_svr_high.classList.add("selectedTier");
}