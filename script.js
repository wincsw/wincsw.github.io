


function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode'); // Define isLight HERE

    sessionStorage.setItem('theme', isLight ? 'light' : 'dark');
    console.log('Theme saved:', sessionStorage.getItem('theme'));
}

window.addEventListener('DOMContentLoaded', function () {
    const savedTheme = sessionStorage.getItem('theme');
    console.log('Saved theme on load:', savedTheme);
    const isLight = savedTheme === 'light';

    if (isLight) {
        document.body.classList.add('light-mode');
        console.log('Applied light mode');
    }
});