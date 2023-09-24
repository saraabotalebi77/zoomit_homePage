import ChangeThemeAndStyle from "./func/change-theme.js";
import ShowLoginRegisterPopup , {removeLoginRegisterPopup} from "./func/login-register-popup.js";
import ShowSearchForm ,{removeSearchForm} from "./func/search-form.js";
import VisibleResponsiveMenu, { HiddenResponsiveMenu  } from "./func/header-responsive-menu.js";
import ReplaceHeaderMenuContentWithResponsiveSubMenu from './func/responsive-sub-menu.js';
import FirstSlider , {clearTimeInterval , setTimeInterval} from './slider/first-slider.js';
import ShareAndSavePostMenu from "./func/share-save-post-menu.js";
import ActiveStickyState from "./func/active-sticky-state.js";
//initial references 
const popup = document.querySelector(".popup");
const themeChangingElements = document.querySelectorAll(".theme-change-wrapper > .theme-wrapper");
const headerMenuSearchItem = document.querySelector(".header--menu--last-item--search-content-wrapper");
const headerMenuMyZoomitItem = document.querySelector(".header--menu--item:first-child>.header--menu--item--text");
const headerResponisveMenuIcon = document.querySelector(".header--responsive-menu-icon");
const headerResponsiveMenuWrapper = document.querySelector(".header--menu-wrapper");
const headerMenuContent = document.querySelector(".header--menu-content");
const headerResponsiveMenuCloseIcon = document.querySelector(".header--responsive-menu--top-baner--close-icon");
const headerMenuItemsWithSubMenu = document.querySelectorAll(".header--menu--item-with-sub-menu");
const selectedTheme = document.querySelector(".show-selected-theme");
const cardMenuIcons = document.querySelectorAll(".card--menu-icon");
const articleMenuIcons = document.querySelectorAll(".last-news-section--left-side--article-menu-icon");
const postsMenu_closeBtn = document.querySelector(".posts-menu-close-btn");
//define variables 
let article_card_menuIcon ={};
//calling first slider
FirstSlider();
// loaded web page
window.addEventListener("load",()=>{
    ChangeThemeAndStyle(1);
})
//resize web page
window.addEventListener("resize",()=>{
    if(window.innerWidth>992){
        clearTimeInterval();
        document.querySelector(".first-slider--slides-show").style.right = "0px";
        if(document.querySelector(".sub-menu-wrapper")){
            document.querySelector(".sub-menu-wrapper").replaceWith(headerMenuContent);
            document.querySelector(".popup").classList.remove("active");
        }
    }else{
        FirstSlider();
    }
})
//add sticky-header class to header element
window.addEventListener("scroll" ,()=>{
    const header = document.querySelector(".header");
    if(header.getBoundingClientRect().top==-1){
        header.classList.add("sticky-header");
    }else{
        header.classList.remove("sticky-header");
    }
    //Change the position of the posts-menu element if the web page is scrolled
    if(article_card_menuIcon.element){
        if(article_card_menuIcon.element.getBoundingClientRect().top<0 || article_card_menuIcon.element.getBoundingClientRect().top>innerHeight){
            article_card_menuIcon = {}
        }
        ShareAndSavePostMenu(article_card_menuIcon);
    }
    //active sticky state for last-news-section
    ActiveStickyState()
})
// click html document
document.addEventListener("click",(event)=>{
    const composedPath = event.composedPath();
    const searchFormWrapper = document.querySelector(".header--menu--last-item--search-form-wrapper");
    const headerMenuLastItem = document.querySelector(".header--menu--item:last-child");
    // Close the search form if it exists and every element of the web page is clicked except for this element
    if(searchFormWrapper && !composedPath.includes(searchFormWrapper) && !composedPath.includes(headerMenuLastItem)){
        removeSearchForm();
    }
     //remove responsive menu
    if(composedPath.includes(document.querySelector(".header")) && !composedPath.includes(document.querySelector(".header--menu-wrapper")) && !composedPath.includes(document.querySelector(".header--responsive-menu-icon-wrapper"))){
        HiddenResponsiveMenu(headerResponsiveMenuWrapper)
    }
    if(!composedPath.includes(document.querySelector(".post-menu-wrapper")) && article_card_menuIcon.index && !composedPath.includes(article_card_menuIcon.element)){
        article_card_menuIcon = {}
        ShareAndSavePostMenu(article_card_menuIcon);
    }
})
// click dark or light theme
themeChangingElements.forEach((elementTheme,index)=>{
    elementTheme.addEventListener("click",()=>{
        index==0 ? ChangeThemeAndStyle(index,"light") :
        index==2 ? ChangeThemeAndStyle(index,"dark") : ChangeThemeAndStyle(1) ;
    })
})
// click the first item of header menu 
headerMenuMyZoomitItem.addEventListener("click",()=>{
    ShowLoginRegisterPopup();
})
//click popup element
popup.addEventListener("click",(event)=>{
    //remove login & register popup 
    if(document.querySelector(".popup--login-register")){
        removeLoginRegisterPopup(event.target);
    }
    if(innerWidth<=576 && !article_card_menuIcon.isClosed){
        article_card_menuIcon.index = null;
        article_card_menuIcon.isClosed =true,
        article_card_menuIcon.element = null,
        article_card_menuIcon.name_parent_element = null;
        ShareAndSavePostMenu(article_card_menuIcon);
    }
})
//click the last item of header menu
headerMenuSearchItem.addEventListener("click",()=>{
    const searchFormWrapper = document.querySelector(".header--menu--last-item--search-form-wrapper");
    if(searchFormWrapper){
        removeSearchForm();
    }else{
        ShowSearchForm();
    }
})
//display the responsive menu if you click on the menu icon
headerResponisveMenuIcon.addEventListener("click",()=>{
    VisibleResponsiveMenu(headerMenuContent,headerResponsiveMenuWrapper);
})
//close the responsive menu if you click on the close icon
headerResponsiveMenuCloseIcon.addEventListener("click",()=>{
    HiddenResponsiveMenu(headerResponsiveMenuWrapper);
})
//display buttons of theme changing  
selectedTheme.addEventListener("click",()=>{
    document.querySelector(".theme-change-wrapper").classList.toggle("inactive");
    selectedTheme.classList.toggle("clicked");
})
// display the submenus of the header menu items if the items are clicked
headerMenuItemsWithSubMenu.forEach(menuItem=>{
    menuItem.addEventListener("click",()=>{
        if(window.innerWidth<=992){
            ReplaceHeaderMenuContentWithResponsiveSubMenu(menuItem,headerMenuContent);
        }
    })
})
//close advertisements
const advertisement_close_icons = document.querySelectorAll(".advertisement-section .close-icon");
advertisement_close_icons.forEach((close_icon,index)=>{
    close_icon.addEventListener("click",(event)=>{
        event.target.parentElement.parentElement.style.display = "none";
    })
})
//click card-menu-icon element and show post menu
cardMenuIcons.forEach((cardMenuIcon,index)=>{
    cardMenuIcon.addEventListener("click",(event)=>{
        article_card_menuIcon.index = index;
        article_card_menuIcon.isClosed = false;
        article_card_menuIcon.element = event.target;
        article_card_menuIcon.parent_name = "card";
        ShareAndSavePostMenu(article_card_menuIcon);
    })
})
//click article-menu-icon element and show post menu
articleMenuIcons.forEach((articleMenuIcon,index)=>{
    articleMenuIcon.addEventListener("click",()=>{
        article_card_menuIcon.index = index;
        article_card_menuIcon.isClosed = false;
        article_card_menuIcon.element = document.querySelectorAll(".last-news-section--left-side--article")[index].querySelector(".last-news-section--left-side--article-menu--item:last-child");
        article_card_menuIcon.parent_name = "article";
        ShareAndSavePostMenu(article_card_menuIcon);
    })
})
// click the button of post menu and close it
postsMenu_closeBtn.addEventListener("click",()=>{
    article_card_menuIcon = {};
    ShareAndSavePostMenu(article_card_menuIcon);
})











































// ************responsive-header************ //
// const header_menu_show_input = document.querySelector(".show-header-menu-input");
// header_menu_show_input.addEventListener("change",(event)=>{
//     if(event.target.checked){
//         document.body.style.overflow = "hidden";
//     }else{
//         document.body.style.overflow = "auto";
//     }
// })

// ************close advertisement section***********//
// const advertisement_close_icons = document.querySelectorAll(".advertisement-section .close-icon");
// advertisement_close_icons.forEach((close_icon,index)=>{
//     close_icon.addEventListener("click",(event)=>{
//         event.target.parentElement.parentElement.style.display = "none";
//     })
// })
// **************show- post- menu*****************//
// const post_menu_icons = [...document.getElementsByClassName("post-menu-icon")];
// post_menu_icons.forEach(post_menu_icon=>{
//     post_menu_icon.addEventListener("click",(event)=>{
//         console.log(event.target)
//     })
// })
// ************products slider*****************//
// let next_slide_index;
// if(window.innerWidth>768){
//     next_slide_index = 6;    
// }else if(window.innerWidth>576){
//     next_slide_index = 4;
// }else if(window.innerWidth>400){
//     next_slide_index = 2
// }else{
//     next_slide_index = 1;
// }
// let index = 0;
// const slides = document.querySelectorAll(".slide-wrapper");
// const slideshow_products = document.querySelector(".slideshow-products");
// const slider_right_btn = document.querySelector(".right-arrow-icon-slider");
// const slider_left_btn = document.querySelector(".left-arrow-icon-slider");
// slider_right_btn.addEventListener("click",()=>{
//     if(next_slide_index<slides.length){
//         const current_slide_width = slides[next_slide_index].getBoundingClientRect().width;
//         if(window.innerWidth>768){
//             slideshow_products.style.transform = `translateX(${index*(current_slide_width+14)}px)`; 
//         }else if(window.innerWidth>576){
//             slideshow_products.style.transform = `translateX(${index*(current_slide_width+16)}px)`; 
//         }else if(window.innerWidth>400){
//             slideshow_products.style.transform = `translateX(${index*(current_slide_width+24)}px)`; 
//         }else{
//             slideshow_products.style.transform = `translateX(${index*(current_slide_width+12)}px)`; 
//         }
//         index++;
//         next_slide_index++;
//     }
// })
// slider_left_btn.addEventListener("click",()=>{
//     const current_slide_width = slides[0].getBoundingClientRect().width;
//     if(index>0){
//         if(window.innerWidth>768){
//             slideshow_products.style.transform = `translateX(-${(1)*(current_slide_width+14)}px)`; 
//         }else if(window.innerWidth>576){
//             slideshow_products.style.transform = `translateX(-${(1)*(current_slide_width+16)}px)`; 
//         }else if(window.innerWidth>400){
//             slideshow_products.style.transform = `translateX(-${(1)*(current_slide_width+24)}px)`; 
//         }else{
//             slideshow_products.style.transform = `translateX(-${(1)*(current_slide_width+12)}px)`; 
//         }
//     }
    
//     index--;
//     next_slide_index--;
// })
// window.addEventListener("resize",()=>{
//     const current_slide_width = slides[index-1].getBoundingClientRect().width;
//     if(window.innerWidth>768){
//         next_slide_index = index+5;
//         slideshow_products.style.transform = `translateX(${(index-1)*(current_slide_width+14)}px)`; 
//     }else if(window.innerWidth>576){
//         next_slide_index = index+3;
//         slideshow_products.style.transform = `translateX(${(index-1)*(current_slide_width+16)}px)`; 
//     }else if(window.innerWidth>400){
//         next_slide_index = index+1;
//         slideshow_products.style.transform = `translateX(${(index-1)*(current_slide_width+24)}px)`; 
//     }else{
//         next_slide_index = index;
//         slideshow_products.style.transform = `translateX(${(index-1)*(current_slide_width+12)}px)`; 
//     }
// })