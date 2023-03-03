const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionlast = document.querySelector[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionlas);

function Next() {
    let sliderSectionFirts = document.querySelectorAll(".slider__section")[0];
    slider.style.maginLeft = "-200%";
    slider.style.transition = "all 0.5";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirts);
        slider.style.marginLeft = "-100%";
    }, 500);
}   

btnRight