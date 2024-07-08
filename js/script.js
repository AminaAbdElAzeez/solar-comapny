// start sidebar
let btn = document.querySelector(".list-icon");
let navbarMobile = document.querySelector(".navbar-mobile");
let close = document.querySelector(".close");

btn.addEventListener("click", () => {
    navbarMobile.style.left="0px";
    navbarMobile.style.display="block";

})

close.addEventListener("click", () => {
    navbarMobile.style.left="-250px";
})
// end sidebar

// start show ellipsis text
let desc1 = document.querySelector(".solar-box-desc.desc1");
let desc2 = document.querySelector(".solar-box-desc.desc2");
let desc3 = document.querySelector(".solar-box-desc.desc3");
let p1 = document.querySelector(".solar-box-desc .hide1")
let p2 = document.querySelector(".solar-box-desc .hide2")
let p3 = document.querySelector(".solar-box-desc .hide3")

desc1.addEventListener("click",() => {
    if(p1.style.visibility === "hidden") {
        console.log(p1.style.visibility)
        p1.style.visibility = "visible";
    } else {
        p1.style.visibility = "hidden";
    }
})

desc2.addEventListener("click",() => {
    if(p2.style.visibility === "hidden") {
        console.log(p2.style.visibility)
        p2.style.visibility = "visible";
    } else {
        p2.style.visibility = "hidden";
    }
})

desc3.addEventListener("click",() => {
    if(p3.style.visibility === "hidden") {
        console.log(p3.style.visibility)
        p3.style.visibility = "visible";
    } else {
        p3.style.visibility = "hidden";
    }
})
// end show ellipsis text


// For Smooth Scrolling to Top
let topBtn = document.getElementById("top");
window.addEventListener("scroll" , () => {
    window.scrollY >= 100 ? topBtn.classList.add("show") : topBtn.classList.remove("show");
  });
  
  topBtn.addEventListener("click", () => {
    window.scrollTo({
        top : 0 ,
        behavior : "smooth"
    });
  });

  // enf Smooth Scrolling to Top

// start pagination in header
let header = document.querySelector(".header");
let logo = document.querySelector(".logo");
// console.log(logo.style.after)
window.addEventListener("scroll", () => {
    if(window.scrollY >= 100) {
        header.style.padding = "7px 0";
        header.style.backgroundColor = "#283646";
        navbarMobile.style.backgroundColor = "rgba(40,54,70,0.9)";
    } else {
        header.style.padding = "15px 0";
        header.style.backgroundColor = "#0B9586";
        navbarMobile.style.backgroundColor = "rgba(10, 116, 103, 0.9)";
    }
}) 
// end pagination in header


// srart smooth scrolling animation
let sections = document.querySelectorAll("section");
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if(top >= offset && top < offset + height) {
            sec.classList.add("show-animate");
        } else {
            sec.classList.remove("show-animate");
        }
    })
}
// end smooth scrolling animation


// for multi-language 

import translations from "./translations.js";

const languageSelector =  document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem("lang", event.target.value)
})

document.addEventListener("DOMContentLoaded" , () => {
    const language = localStorage.getItem("lang");
    setLanguage(language);
    // setLanguage(localStorage.getItem("lang"));
})
const setLanguage = (language) => {
    const elements = document.querySelectorAll("[data-i18]")
    elements.forEach((element) => {
        const translationKey = element.getAttribute("data-i18");
        element.textContent = translations[language][translationKey]
    });

    document.dir = language === "ar" ? "rtl" : "ltr";

    // if(language === "ar") {
    //     document.dir = "rtl"
    // } else {
    //     document.dir = "ltr"
    // }
}