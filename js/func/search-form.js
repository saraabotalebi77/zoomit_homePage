export default function ShowSearchForm(){
    const searchFormWrapper = document.createElement("div");
    searchFormWrapper.className = "header--menu--last-item--search-form-wrapper position-absolute"
    searchFormWrapper.innerHTML = `
        <form class="header--menu--last-item--search-form">
            <svg class="header--menu--last-item--search-svg vertical-middle" width="12px" height="12px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z" fill="var(--color-gray-01)"/>
            </svg>
            <input type="search" placeholder="جستجو..." class="header--menu--last-item--search-input color-gray-01"/>
        </form>
        <div class="header--menu--last-item--saerched-results">
           <div class="header--menu--last-item--saerched-results--category fs-0">
                <h2 class="header--menu--last-item--saerched-results--category--title d-inline-block vertical-top fs-3 color-gray-01">
                    <svg class="vertical-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="var(--color-gray-01)"><path d="M9.635 6.293S10.343 1.905 7.454 0c-.087 1.525-.787 2.938-1.923 3.887C4.296 5.03 1.976 7.6 2 10.34c-.019 2.39 1.25 4.583 3.275 5.66.072-1.068.549-2.061 1.323-2.755.657-.532 1.083-1.32 1.183-2.185 1.728.968 2.846 2.822 2.943 4.881v.013c1.91-.922 3.167-2.895 3.254-5.106.205-2.574-1.133-6.074-2.32-7.218-.45 1.054-1.146 1.971-2.024 2.663z" transform="translate(-1196 -1035) translate(1196 1035)"></path></svg>
                    <span>داغ ترین ها</span>
                </h2>
                <ul class="header--menu--last-item--saerched-results--category--menu d-inline-block vertical-top">
                    <li class="header--menu--last-item--saerched-results--category--menu--item position-relative fs-4"><a href="#" class="color-gray-01 hoverable-text-color">آموزش قدم به قدم</a></li>
                    <li class="header--menu--last-item--saerched-results--category--menu--item position-relative color-gray-01 fs-4"><a href="#" class="color-gray-01 hoverable-text-color">راهنمای خرید گوشی</a></li>
                    <li class="header--menu--last-item--saerched-results--category--menu--item position-relative color-gray-01 fs-4"><a href="#" class="color-gray-01 hoverable-text-color">آموزش اینستاگرام</a></li>
                    <li class="header--menu--last-item--saerched-results--category--menu--item position-relative color-gray-01 fs-4"><a href="#" class="color-gray-01 hoverable-text-color">ویندوز ۱۱</a></li>
                    <li class="header--menu--last-item--saerched-results--category--menu--item position-relative color-gray-01 fs-4"><a href="#" class="color-gray-01 hoverable-text-color">بهترین اپلیکیشن ها</a></li>
                </ul>
           </div>
        </div>`;
    document.querySelector(".header").classList.add("header-with-search-form");
    document.querySelector(".header--menu--item:last-child").append(searchFormWrapper);
}
export function removeSearchForm(){
    const searchFormWrapper = document.querySelector(".header--menu--last-item--search-form-wrapper");
    searchFormWrapper.remove();
    document.querySelector(".header").classList.remove("header-with-search-form");
}
