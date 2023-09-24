export default function ShareAndSavePostMenu(aboutMenuIcon){
    const menu = document.querySelector(".posts-menu-wrapper");
    const menu_position = menu.getBoundingClientRect();
    if(innerWidth<=576){
        if(!aboutMenuIcon.isClosed){
            menu.classList.add("active");
            document.body.style.overflow = "hidden";
            document.querySelector(".popup").classList.add("active");
            document.querySelector(".popup").style.transition = "backdrop-filter 0.2s ease 0s";
        }else{
            menu.classList.remove("active");
            document.body.style.overflow = "auto";
            document.querySelector(".popup").classList.remove("active");
            document.querySelector(".popup").style.transition = "backdrop-filter 0.2s ease 0.2s";
        }
    }else{
        if(aboutMenuIcon.element){
            menu.style.visibility = "visible"; 
            const aboutMenuIcon_position =  aboutMenuIcon.element.getBoundingClientRect();
            if(!aboutMenuIcon.isClosed && aboutMenuIcon_position.top>0 && aboutMenuIcon_position.top<innerHeight){
                menu.style.top = `${(innerHeight-aboutMenuIcon_position.top)<menu_position.height ? innerHeight-menu_position.height-5 :aboutMenuIcon_position.top}px`;
                if(aboutMenuIcon.parent_name=="card"){
                    menu.style.left = `${parseInt(aboutMenuIcon_position.left) + parseInt(aboutMenuIcon_position.width)+10}px`;
                }else if(aboutMenuIcon.parent_name=="article"){
                    menu.style.left = `${parseInt(aboutMenuIcon_position.left) - menu_position.width-10}px`;
                }
            }
        }else{
            menu.style.visibility = "hidden";
        }
        
    }    
}