const theme_changing_elements = document.querySelectorAll(".theme-change-wrapper > .theme-wrapper");
export default async function ChangeThemeAndStyle(identifierTheme,specifiedTheme){
    theme_changing_elements.forEach((theme,index)=>{
        if(index==identifierTheme){
            theme.children[0].classList.add("active");
            theme.classList.add("active");
        }else{
            theme.children[0].classList.remove("active");
            theme.classList.remove("active");
        }
    })
    if(specifiedTheme=="dark"){
        document.documentElement.className = "dark";
        document.querySelector(".show-selected-theme>span:last-child").innerText = "تیره";
    }else if(specifiedTheme=="light"){
        document.documentElement.className = "light";
        document.querySelector(".show-selected-theme>span:last-child").innerText = "روشن";

    }else{
        document.querySelector(".show-selected-theme>span:last-child").innerText = "بر اساس سیستم شما";

        // const Response1 = await fetch("http://api.timezonedb.com/v2/get-time-zone?key=7PKCG2X9MWZZ&format=json&by=zone&zone=Asia/Tehran");
        // const data1 = await Response1.json();
        // const currentDate = new Date(data1.formatted).toLocaleDateString("fa-IR");
        // const Response2 =  await fetch(` http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2 http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2`);
        // const data2 = await Response2.json();       
        // console.log(data2)
    }
}