const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-side');
const slideLeft = document.querySelector('.left-side');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", upButtonChange);

function upButtonChange() {
    const slideHeight = sliderContainer.clientHeight;

    if (activeSlideIndex < slidesLength - 1) {
        activeSlideIndex++;


    } else {

        activeSlideIndex = 0;

    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`;

}

downButton.addEventListener("click", downButtonChange);

function downButtonChange() {
    const slideHeightT = sliderContainer.clientHeight;

    activeSlideIndex--;
    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * slideHeightT}px)`;
    slideLeft.style.transform = `translateY(${activeSlideIndex * slideHeightT}px)`;

}