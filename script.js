
var r = document.querySelector(':root');

function lightTheme() {
    r.style.setProperty('--ink', 'black');
    r.style.setProperty('--bgcolor', 'white');
    document.getElementById("me_image").src = "images/me_body.png";
    console.log('set light mode');


}

function darkTheme() {
    r.style.setProperty('--ink', 'white');
    r.style.setProperty('--bgcolor', 'black');
    document.getElementById("me_image").src = "images/me_body_black.png";
    console.log('set dark mode');

}

function toggleTheme() {
    if (sessionStorage.getItem('theme') == 'light') {
        darkTheme();
        sessionStorage.setItem('theme', 'dark');
    }
    else {
        lightTheme();
        sessionStorage.setItem('theme', 'light');

    }

    console.log('Theme saved change');
    

}

// window.addEventListener('DOMContentLoaded', function () {
//     const savedTheme = sessionStorage.getItem('theme');
//     console.log('Saved theme on load:', savedTheme);
//     const isLight = savedTheme === 'light';

//     if (sessionStorage.getItem('theme') == "light") {
//         lightTheme()
//         console.log('Applied light mode');
//     }
//     else {
//         darkTheme();
//         console.log('Applied dark mode');

//     }
// });