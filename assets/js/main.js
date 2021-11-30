
// sig animation after load 
let sig = document.getElementById("signature");
let sigLast = document.getElementById("signature_last");
let sigWrapper = document.getElementById("svg_wrapper")
//heder parallax
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
// let header_text = document.getElementById("header_text");
let btn = document.getElementById("btn");
let mountains_front = document.getElementById("mountains_front");
// about me 

let aboutMeTextWrapper = document.querySelector(".about_me_text_wrapper");
let aboutMeParagraph = document.querySelector("#about_me_text_Paragraph");
let myName = document.querySelector("#about_me_name");
// cursor 
let cursor = document.querySelector(".cursor");
let cursor2 = document.querySelector(".cursor2");
//animation letter
const allAnimationLetter = document.querySelectorAll(".animation-1");
AOS.init();
// preloader after
function myFunction() {

    //adding animation 
    sig.style.animationName = "sig";
    sigLast.style.animationName = "sig_last";
    console.log("done");

}
// cursor js 
// document.addEventListener("mousemove", function (e) {
//     // cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;";

//     cursor.style.left = e.clientX + "px";
//     cursor.style.top = e.clientY + "px";
//     cursor2.style.left = e.clientX + "px";
//     cursor2.style.top = e.clientY + "px";

// })

// parallax js 
window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1 + "px";
    mountains_behind.style.top = value * 0.8 + "px";
    mountains_front.style.top = value * 0.1 + "px";
    // header_text.style.marginRight = value * 2.5 + "px";
    // header_text.style.marginTop = value * 1.5 + "px";

    //split
    // let check = window.innerHeight * 2;
    // let check2 = window.innerHeight * 4.9999;
    // if (value >= check & value <= check2) {
    //     document.querySelector('.skilled').style.position = "fixed";
    //     document.querySelector('.skilled').style.width = "50%";
    //     // document.querySelector('.skilled').style.height = "100vh";
    //     console.log("hi")
    // }
    // else {
    //     document.querySelector('.skilled').style.position = "static";
    //     document.querySelector('.skilled').style.width = "100%";
    //     // document.querySelector('.skilled').style.height = "100vh"; 

    // }

    // animation of banner letter  
    // if (value >= this.document.querySelector(".about_me_section").offsetTop) {
    //     const allAnimationLetter = document.querySelectorAll(".animation-1");

    //     for (let i = 0; i < allAnimationLetter.length; i++) {
    //         const element = allAnimationLetter[i];

    //         element.style.animationName = "rubberBand";
    //         element.style.animationIterationCount = "1";


    //         // setTimeout(() => {
    //         //     element.style.animationName = "none";
    //         // }, 1050);


    //     }

    // }

    // animation of banner end


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
// window.onload = function () {

//     console.log('dondjdkfjalkjfkad')
// };

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

// banner img 

// sneak game 
let myImg = document.querySelector(".my_img");
let body = document.querySelector("body");
//sneak call
// myImg.addEventListener("mouseenter", food);

myImg.addEventListener("mousemove", function (e) {
    const bubbles = document.createElement("span");
    bubbles.style.left = e.offsetX + "px";
    bubbles.style.top = e.offsetY + "px";
    myImg.appendChild(bubbles);

    let smallImgs = document.querySelectorAll(".my_img span");
    for (let i = 1; i < smallImgs.length; i++) {
        const element = smallImgs[i - 1];
        console.log(smallImgs.length);
        setTimeout(() => {
            element.remove();
        }, 900);

    }

})
myImg.addEventListener("mouseleave", function (e) {
    let smallImgs = document.querySelectorAll(".my_img span");
    for (let i = 0; i < smallImgs.length; i++) {
        const element = smallImgs[i];
        setTimeout(() => {
            element.remove();
        }, 900);

    }
})

// sneak game  


// banner img end 
let width = "100%"
let fontSize = '20'
if (window.innerWidth < 600) {
    width = 320;
    fontSize = '15';
}
console.log(width);
//banner rotation 
$(document).ready(function () {
    var entries = [
        { label: 'React' },
        { label: 'Fixing errors' },
        { label: 'Material Ui' },
        { label: 'Firebase' },
        { label: 'Private Route' },
        { label: 'Mongodb' },
        { label: 'Mongodb' },
        { label: 'Express' },
        { label: 'Node Js' },
        { label: 'JSON' },
        { label: 'jQuery' },
        { label: 'Dev Tool' },
        { label: 'React Router' },
        { label: 'React Hooks' },
        { label: 'Axios' },
        { label: 'Git' },
        { label: 'Stripe' },
        { label: 'Javascript' },
        { label: 'npm' },
        { label: 'Typescript' },
        { label: 'No SQL' },
        { label: 'Css' },
        { label: 'Tailwind' },
        { label: 'Bootstrap' },
        { label: 'HTML' },
        { label: 'ES6' }
    ];
    var settings = {
        entries: entries,
        width: width,
        height: 480,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'transparent',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 2,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: fontSize,
        fontColor: '#f51a75',
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
console.log(window.innerWidth);