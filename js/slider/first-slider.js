//initial references
const slider = document.querySelector(".first-slider");
const slidesShow = document.querySelector(".first-slider--slides-show");
const articles = document.querySelectorAll(".first-slider--article");
const sliderBtns = document.querySelectorAll(".first-slider--btn");
//define variables 
let currentX = 0, active = false, startX = 0, startX_outerContainer = 0, deviceType = "", activeSlideIndex = 1, timeInterval = null;
const changeSlide = (right_transition , pointerEvents , right_amount )=>{
    const outerContainer = slider.getBoundingClientRect();
    slidesShow.style.right = `${right_amount ? right_amount : -1 * (activeSlideIndex * (outerContainer.width + 10))}px`;
    slidesShow.style.transition = right_transition;
    if(pointerEvents){
        articles[activeSlideIndex].style.pointerEvents = pointerEvents;
    }
}
const changeBtn = () => {
    sliderBtns.forEach(sliderBtn => {
        sliderBtn.classList.remove("active");
    })
    if (activeSlideIndex == 0 || activeSlideIndex == 3) {
        sliderBtns[2].classList.add("active");
    } else if (activeSlideIndex == 1 || activeSlideIndex == 4) {
        sliderBtns[0].classList.add("active");
    } else {
        sliderBtns[1].classList.add("active");
    }
    changeSlide("right 0.3s","auto");
}
const ActiveSlide = () => {
    const outerContainer = slider.getBoundingClientRect();
    if (currentX - startX_outerContainer <= -((outerContainer.width) / 2)) {
        activeSlideIndex--;
    } else if (currentX - startX_outerContainer >= ((outerContainer.width) / 2)) {
        activeSlideIndex++;
    }
    changeBtn();
}
const clearTimeInterval = () => {
    if (timeInterval) {
        clearInterval(timeInterval);
        timeInterval = null;
    }
}
const setTimeInterval= ()=>{
    clearTimeInterval();
    timeInterval = setInterval(() => {
        if(activeSlideIndex==4){
            activeSlideIndex = 1;
        }else{
            activeSlideIndex++;
        }
        changeBtn();
    }, 5000)
}
export default function FirstSlider() {
    if(innerWidth<=992){
        const events = {
            mouse: {
                down: "mousedown",
                up: "mouseup",
                move: "mousemove",
            },
            touch: {
                down: "touchstart",
                up: "touchend",
                move: "touchmove"
            }
        }
        const isTouchDevice = () => {
            try {
                document.createEvent("TouchEvent");
                deviceType = "touch";
                return true;
            } catch (e) {
                deviceType = "mouse";
                return false;
            }
        }
        isTouchDevice();
        sliderBtns[0].classList.add("active");
        setTimeInterval();
        slidesShow.addEventListener(events[deviceType].down, (event) => {
            if(innerWidth<=992){
            active = true;
            startX = (isTouchDevice() ? event.touches[0].clientX : event.clientX) + parseInt(getComputedStyle(slidesShow).right);
            startX_outerContainer = (isTouchDevice() ? event.touches[0].clientX : event.clientX);
            }
        })
        slidesShow.addEventListener(events[deviceType].move, (event) => {
            if (active) {
                articles.forEach(article => {
                    article.style.pointerEvents = "none";
                })
                if (timeInterval) {
                    clearTimeInterval();
                }
                currentX = (isTouchDevice() ? event.touches[0].clientX : event.clientX);
                changeSlide("right 0s",null ,startX - currentX,);
            }
        })
        slidesShow.addEventListener(events[deviceType].up, () => {
            if(innerWidth<992){
                ActiveSlide();
                active = false;
            }
        })
        slidesShow.addEventListener("transitionend", () => {
            if (activeSlideIndex == 0 || activeSlideIndex == 4) {
                if (activeSlideIndex == 0) {
                    activeSlideIndex = 3;
                } else if (activeSlideIndex == 4) {
                    activeSlideIndex = 1;
                }
                changeSlide("right 0s","auto");
            }
        })
        sliderBtns.forEach((sliderBtn, index) => {
            sliderBtn.addEventListener("click", () => {
                if (timeInterval) {
                    clearTimeInterval();
                }
                if (index == 0) {
                    activeSlideIndex = 1;
                } else if (index == 1) {
                    activeSlideIndex = 2;
                } else if (index == 2) {
                    activeSlideIndex = 3;
                }
                changeBtn();
            })
        })
    }
    
   
}
export {setTimeInterval , clearTimeInterval}