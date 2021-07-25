
// sig animation after load 
let sig = document.getElementById("signature");
let sigLast = document.getElementById("signature_last");

let sigWrapper = document.getElementById("svg_wrapper")

let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let header_text = document.getElementById("header_text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
// about me 

let aboutMeTextWrapper = document.querySelector(".about_me_text_wrapper");
let aboutMeParagraph = document.querySelector("#about_me_text_Paragraph");
let myName = document.querySelector("#about_me_name");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1 + "px";
    mountains_behind.style.top = value * 0.8 + "px";
    mountains_front.style.top = value * 0.1 + "px";
    header_text.style.marginRight = value * 2.5 + "px";
    header_text.style.marginTop = value * 1.5 + "px";
    btn.style.marginTop = value * 1.5 + "px";

    // about me  
    // aboutMeTextWrapper.style.transform = `skewX(${value * 0.019}deg)`;
    // myName.style.transform = `translateX(${value * 0.5}px)`;
})
// Text 3d 
// aboutMeTextWrapper.addEventListener('mousemove', (e) => {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//     let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
//     aboutMeParagraph.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// })
// aboutMeTextWrapper.addEventListener('mouseenter', (e) => {
//     aboutMeParagraph.style.transition = "none";
// })
// aboutMeTextWrapper.addEventListener('mouseleave', (e) => {
//     aboutMeParagraph.style.transform = "rotate(0deg)";
//     aboutMeParagraph.style.transition = "transform .8s ease";
// })
// preloader after
function myFunction() {
    document.querySelector("body").style.opacity = "1";
    //adding animation 
    sig.style.animationName = "sig";
    sigLast.style.animationName = "sig_last";
    console.log("done");

}
//hover on svg
// sigWrapper.addEventListener('mouseenter', function () {
//     sig.style.animationIterationCount = "infinite";
//     sigLast.style.animationIterationCount = "infinite";
// })
// sigWrapper.addEventListener('mouseleave', function () {
//     sig.style.animationIterationCount = "1";
//     sigLast.style.animationIterationCount = "1";
// })

//bet on hover 
// const allText = document.querySelector(".about_me_text_wrapper div");
// document.querySelector(".about_me_text_wrapper div").addEventListener("mouseover", function () {
//     let el = this;
//     el.classList.add("animate__heartBeat");
//     setInterval(function () {
//         el.classList.remove("animate__heartBeat");

//     }, 1000);
//     console.log(this)
// })



// last 
const allAnimationLetter = document.querySelectorAll(".animation-1");

for (let i = 0; i < allAnimationLetter.length; i++) {
    const element = allAnimationLetter[i];
    element.addEventListener("mouseenter", function () {
        element.style.animationName = "rubberBand";
        element.style.animationIterationCount = "1";
        // setInterval(() => {
        //     element.style.animationName = "none";
        // }, 2000);

    })
    element.addEventListener("mouseleave", function () {
        // element.style.animationName = "none";
        setTimeout(() => {
            element.style.animationName = "none";
        }, 1050);
    })

}