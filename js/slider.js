"use strict";

let slidR = document.getElementById("slidR")
let slidL = document.getElementById("slidL")

let sliderNum = 1;

slidR.addEventListener("click", function(){
    sliderNum++;
    if(sliderNum==5){sliderNum=1}
    setSlide();
});

slidL.addEventListener("click", function(){
    sliderNum--;
    if(sliderNum==0){sliderNum=4;}
    setSlide();
});

function setSlide(){
    fir1.style.display = "none";
    fir2.style.display = "none";
    fir3.style.display = "none";
    fir4.style.display = "none";

    let neededSLide = document.getElementById("fir" +sliderNum)
    neededSLide.style.display = "block";
};
