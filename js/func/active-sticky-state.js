let startX =0;
export default function ActiveStickyState(){
    const right_side__last_new_section = document.querySelector(".last-news-section--right-side");
    if(scrollY - startX >0){
        right_side__last_new_section.style.top = `-${document.querySelector(".social-networks-section").offsetTop + document.querySelector(".social-networks-section").getBoundingClientRect().height - innerHeight}px`;
    } else if(scrollY - startX <0){
        right_side__last_new_section.style.top = "60px";
    }
    startX = scrollY;
}