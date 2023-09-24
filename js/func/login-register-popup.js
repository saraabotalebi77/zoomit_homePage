export default function ShowLoginRegisterPopup(){
    const popupContent = document.createElement("div");
    popupContent.className = "popup--login-register center-element-relative-parent pt-10";
    popupContent.innerHTML = `
        <div class="popup--login-register--header clearfix pb-10">
            <span class="popup--login-register--close-icon close-icon float-left"></span>
            <h4 class="popup--login-register--title title pr-20">وارد شوید / ثبت نام کنید</h4>
        </div>
        <div class="popup--login-register--content px-20 fs-3">
            <p class="popup--login-register--description-1 fw-bold pt-10">برای ادامه باید وارد حساب کاربری خودت بشی</p>
            <p class="popup--login-register--description-2">اگر قبلا ثبت‌نام کردی که چه عالی! فقط باید وارد بشی و اگر نه کافیه در کوتاه‌ترین زمان ثبت‌نام کنی و از امکانات زیر بهره ببری:</p>
            <div class="popup--login-register--services fs-0">
                <div class="popup--login-register--service popup--login-register--service-1 d-inline-block text-center fs-3">
                    <img class="popup--login-register--service-img" src="images/community-users.svg"/>
                    <p class="popup--login-register--service-text">در جامعه کاربران حرفه‌ای زومیت فعالیت کنی</p>
                </div>
                <div class="popup--login-register--service popup--login-register--service-2 d-inline-block text-center fs-3">
                    <img class="popup--login-register--service-img" src="images/private-account.svg"/>
                    <p class="popup--login-register--service-text">از زومیت شخصی‌سازی شده خودت استفاده کنی</p>
                </div>
                <div class="popup--login-register--service popup--login-register--service-3 d-inline-block text-center fs-3">
                    <img class="popup--login-register--service-img" src="images/speaker.svg"/>
                    <p class="popup--login-register--service-text">از آخرین قیمت محصولات موردعلاقه‌تون باخبر شوی</p>
                </div>
            </div>
        </div>
        <div class="popup--login-register--footer px-20 py-10">
            <a href="#" class="popup--login-register--login-register-btn badge invert-10">ورود / ثبت نام</a>
            <button class="popup--login-register--cancel-btn outline-btn invert-10 cursor-pointer">انصراف</button>
        </div>
    `;
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".popup").style.transition = "backdrop-filter 0s ease 0s";
    document.querySelector(".popup").append(popupContent);
}
export function removeLoginRegisterPopup(clickedElement){
    const popup = document.querySelector(".popup");
    const popupLoginRegisterCloseIcon = document.querySelector(".popup--login-register--close-icon");
    const popupLoginRegisterCancelBtn = document.querySelector(".popup--login-register--cancel-btn")
    if(clickedElement==popup || clickedElement==popupLoginRegisterCloseIcon || clickedElement==popupLoginRegisterCancelBtn){
        document.querySelector(".popup--login-register").remove();
        popup.classList.remove("active");

    }
}