
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
let cursorinner = document.querySelector(".cursor2");
//animation letter
const allAnimationLetter = document.querySelectorAll(".animation-1");
const body = document.getElementsByTagName('body')[0];
const nav = document.querySelector('#nav');
const preloader = document.getElementById('preloader');
const main = document.getElementsByTagName('main')[0];
AOS.init();

// preloader after
function myFunction(e) {

    preloader.style.opacity = '0';
    preloader.style.visibility = 'hidden';
    body.style.overflowY = 'scroll';
    //adding animation 
    if (window.innerWidth < 500) {

        nav.style.background = 'rgba(255, 255, 220,0.1)';
        nav.style.backdropFilter = 'blur(15px)';
    }
    sig.style.animationName = "sig";
    sigLast.style.animationName = "sig_last";
    for (let i = 0; i < allAnimationLetter.length; i++) {
        const element = allAnimationLetter[i];
        element.style.animationName = "rubberBand";
        element.style.animationDelay = `${i * 30}ms`;
        element.style.animationIterationCount = "1";
        setTimeout(() => {
            element.style.animationDelay = `0s`;
            element.style.animationName = "none";
        }, i * 30 + 1080);
    }

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        var templateParams = {
            name: 'James',
            notes: 'Check this out!'
        };
        emailjs.sendForm('service_k43azve', 'template_u7c7h1b', '#contact-form')
            .then(function () {
                console.log('SUCCESS!');
                alert('Mail send')
            }, function (error) {
                console.log('FAILED...', error);
                alert('Failed to send.Please try again later')
            });
    });

}
// cursor js  

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorinner.style.left = x + 'px';
    cursorinner.style.top = y + 'px';
});

// email js 


// parallax js 
window.addEventListener("scroll", function () {
    let value = window.scrollY;
    if (window.innerWidth > 500) {

        if (value > 500) {
            nav.style.background = 'rgba(255, 255, 220,0.1)';
            nav.style.backdropFilter = 'blur(5px)';
        }
        else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'blur(0)';
        }
    }
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1 + "px";
    mountains_behind.style.top = value * 0.8 + "px";
    mountains_front.style.top = value * 0.1 + "px";
})
// scroll progress bar 
let scroll = document.querySelector(".scroll");
window.onscroll = function () {
    let totalHight = document.body.scrollHeight - window.innerHeight;

    let progress = (window.pageYOffset / totalHight) * 100;
    scroll.style.height = progress + "%";
}

// animation of banner letter 

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
// isotope
// external js: isotope.pkgd.js



// banner img end 
let width = "100%"
let fontSize = '20'
if (window.innerWidth < 600) {
    width = 350;
    fontSize = '12';
}
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
        opacityOut: 1.00,
        opacitySpeed: 6,
        fov: 800,
        speed: 1,
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

    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-sizer'
        }
    })
    //img button
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $('.filter-button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //masonry for blog
    $('.blog-container').isotope({
        itemSelector: '.single-blog',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.blog-sizer'
        }
    })
})

