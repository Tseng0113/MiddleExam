let slideIndex1 = 0;
let slideIndex2 = 0;
let slideIndex3 = 0;
let slideIndex4 = 0;

showSlides1();
showSlides2();
showSlides3();
showSlides4();

function showSlides1() {
    let i;
    const slides = document.querySelectorAll(".mySlides1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}    
    slides[slideIndex1-1].style.display = "block";  
    setTimeout(showSlides1, 5000); // Change image every 5 seconds
}

function showSlides2() {
    let i;
    const slides = document.querySelectorAll(".mySlides2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}    
    slides[slideIndex2-1].style.display = "block";  
    setTimeout(showSlides2, 5000); // Change image every 5 seconds
}

function showSlides3() {
    let i;
    const slides = document.querySelectorAll(".mySlides3");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}    
    slides[slideIndex3-1].style.display = "block";  
    setTimeout(showSlides3, 5000); // Change image every 5 seconds
}

function showSlides4() {
    let i;
    const slides = document.querySelectorAll(".mySlides4");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex4++;
    if (slideIndex4 > slides.length) {slideIndex4 = 1}    
    slides[slideIndex4-1].style.display = "block";  
    setTimeout(showSlides4, 5000); // Change image every 5 seconds
}
