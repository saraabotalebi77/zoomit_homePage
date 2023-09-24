export default function VisibleResponsiveMenu(headerMenuContent,headerResponsiveMenuWrapper){
    if(document.querySelector(".sub-menu-wrapper")){
        document.querySelector(".sub-menu-wrapper").replaceWith(headerMenuContent);
    }
    document.body.style.overflow = "hidden";
    headerResponsiveMenuWrapper.classList.add("active");
    document.querySelector(".header").classList.add("active");
    headerResponsiveMenuWrapper.style.top = "0px";
    document.querySelector(".theme-change-wrapper").classList.remove("inactive");
    document.querySelector(".show-selected-theme").classList.remove("clicked");
  
}  
export function HiddenResponsiveMenu(headerResponsiveMenuWrapper){
    document.body.style.overflow = "auto";
    headerResponsiveMenuWrapper.classList.remove("active");
    document.querySelector(".header").classList.remove("active");
    headerResponsiveMenuWrapper.style.top = `${-1 * (document.querySelector(".header--menu-wrapper").getBoundingClientRect().bottom + 40)}px`;
}
