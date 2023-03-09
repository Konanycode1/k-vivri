//slide
let sliceindex = 0;


function slideCard() {
    let slide = document.querySelectorAll(".slice");
    let i;
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"
    }
    sliceindex++;
    if(sliceindex > slide.length){
        sliceindex = 1;
    }
    slide[sliceindex - 1].style.display = "block";
    setTimeout(slideCard,2000); 
}
slideCard()