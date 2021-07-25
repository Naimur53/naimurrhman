
// sig animation after load 
let sig = document.getElementById("signature");
let sigLast = document.getElementById("signature_last");
let sigWrapper = document.getElementById("svg_wrapper")
//heder parallax
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
// cursor 
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");

// preloader after
function myFunction() {
    document.querySelector("body").style.opacity = "1";
    //adding animation 
    sig.style.animationName = "sig";
    sigLast.style.animationName = "sig_last";
    console.log("done");

}
// cursor js 
document.addEventListener("mousemove", function (e) {
    // cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;";

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor2.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";
})

// parallax js 
window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1 + "px";
    mountains_behind.style.top = value * 0.8 + "px";
    mountains_front.style.top = value * 0.1 + "px";
    header_text.style.marginRight = value * 2.5 + "px";
    header_text.style.marginTop = value * 1.5 + "px";
    btn.style.marginTop = value * 1.5 + "px";

    //split
    let check = window.innerHeight * 2;
    if (value >= check) {
        document.querySelector('.skilled').style.position = "fixed";
        document.querySelector('.skilled').style.width = "50%";
        // document.querySelector('.skilled').style.height = "100vh";
        console.log("hi")
    }
    else {
        document.querySelector('.skilled').style.position = "static";
        document.querySelector('.skilled').style.width = "100%";
        // document.querySelector('.skilled').style.height = "100vh";


    }


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

// scroll progress bar 
let scroll = document.querySelector(".scroll");
window.onscroll = function () {
    let totalHight = document.body.scrollHeight - window.innerHeight;

    let progress = (window.pageYOffset / totalHight) * 100;
    scroll.style.height = progress + "%";
}

// animation of banner letter  
const allAnimationLetter = document.querySelectorAll(".animation-1");

for (let i = 0; i < allAnimationLetter.length; i++) {
    const element = allAnimationLetter[i];
    element.addEventListener("mouseenter", function () {
        element.style.animationName = "rubberBand";
        element.style.animationIterationCount = "1";
    })
    element.addEventListener("mouseleave", function () {
        setTimeout(() => {
            element.style.animationName = "none";
        }, 1050);
    })

}
// animation of banner end

//banner rotation 
$(document).ready(function () {
    var entries = [
        { label: 'Web design' },
        { label: 'Fixing errors' },
        { label: 'WordPress' },
        { label: 'Web development' },
        { label: 'woo Commerces' },
        { label: 'Landing page' },
        { label: 'JQUERY' },
        { label: '1 year experience' },
        { label: 'Javascript' },
        { label: 'UX design' },
        { label: 'UI design' },
        { label: 'Python' }
    ];
    var settings = {
        entries: entries,
        width: "100%",
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'transparent',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '24',
        fontColor: '#7ea4f5',
        fontWeight: 'bold',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: false,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'middle',
        tooltipDiffX: 0,
        tooltipDiffY: 20

    };
    $('#rotation').svg3DTagCloud(settings);
})
console.log(window.innerHeight);