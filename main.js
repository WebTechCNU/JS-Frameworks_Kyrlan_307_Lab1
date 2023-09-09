let homeWrapper = document.querySelector('.home-wrapper-presentation');
let imgMe = document.querySelector('.me');
let btnsWrapper = document.querySelector('.btns-wrapper');

function checkWindowWidth() {
    if (window.innerWidth < 1024) {
        imgMe.classList.add("d-none");
        homeWrapper.classList.add("w-100");
        btnsWrapper.classList.add("justify-content-center");
    } else {
        imgMe.classList.remove("d-none");
        homeWrapper.classList.remove("w-100");
        btnsWrapper.classList.remove("justify-content-center");
    }
}

window.addEventListener("load", checkWindowWidth);
window.addEventListener("resize", checkWindowWidth);

