export default function ReplaceHeaderMenuContentWithResponsiveSubMenu(menuItem,headerMenuContent){
    const menuItemTitle = menuItem.querySelector(".header--menu--item--text").innerText;
    const menuItemSubMenuItems = [...menuItem.querySelectorAll(".header--sub-menu--link")].map(subMenuLink=>subMenuLink.innerText);
    const subMenuWrapper = document.createElement("div");
    subMenuWrapper.className = "sub-menu-wrapper w-100";
    subMenuWrapper.innerHTML = `
        <div class="sub-menu-wrapper--top-baner position-relative">
            <span class="go-back-header-content-menu position-absolute center-element-vertically-relative-parent color-gray-01 cursor-pointer">بازگشت</span>
            <h4 class="sub-menu-title text-center">${menuItemTitle}</h4>
        </div>
        <ul class="sub-menu fs-0">
            ${menuItemSubMenuItems.map(item=>`<li class="sub-menu--item d-inline-block vertical-top fs-3"><a href="#" class="sub-menu--link color-gray-01">${item}</a></li>`).join("")}
        </ul>`;
    headerMenuContent.replaceWith(subMenuWrapper);
    document.querySelector(".go-back-header-content-menu").addEventListener("click",(event)=>{
        subMenuWrapper.replaceWith(headerMenuContent);
    })
}