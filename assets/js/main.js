function myFunction() {
    document.querySelector("body").style.opacity = "1";
    console.log("done");
}
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let header_text = document.getElementById("header_text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
// about me 

let aboutMeTextWrapper = document.querySelector(".about_me_text_wrapper");
let myName = document.querySelector("#about_me_name");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0 + "px";
    header_text.style.marginRight = value * 2.5 + "px";
    header_text.style.marginTop = value * 1.5 + "px";
    btn.style.marginTop = value * 1.5 + "px";

    // about me  
    aboutMeTextWrapper.style.transform = `skewX(${value * 0.009}deg)`;
    aboutMeTextWrapper.style.transform = `skewX(${value * 0.009}deg)`;
    myName.style.transform = `translateX(${value * 0.5}px)`;
})