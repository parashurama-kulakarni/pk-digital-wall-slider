var img = document.getElementById("slides");
var body = document.getElementById("body");
document.addEventListener('dblclick', () => {
    document.body.requestFullscreen();
});
var width = window.screen.width;
var height = window.screen.height;

var svgloader = document.querySelector('.svg-loader');

img.setAttribute('width', width);
img.setAttribute('height', height);
setInterval(function () {
    svgloader.remove();
    img.setAttribute("src",
        `https://source.unsplash.com/collection/190727/${width}x${height}?${parseInt(Math.random() * 1000)}`);
    img.style.display = 'block';
}, 5000);