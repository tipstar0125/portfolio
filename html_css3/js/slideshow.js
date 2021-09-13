const background = document.getElementById('background');
const sp_width = 768;
const num_images = 4;
const num_images_big = 6;
let num = 1;

const setBackground = (url) => {
    background.style.backgroundImage = url;
    background.animate([{opacity: 0}, {opacity: 1}], 1000);
}

const slideshow = () => {

    background.animate([{opacity: 1}, {opacity: 0}], 1000);
    let image_url

    if (window.innerWidth < sp_width) {
        const image_number = num % num_images + 1;
        image_url = 'url(../images/header' + String(image_number) + '.png)';
    } else {
        const image_number = num % num_images_big + 1;
        image_url = 'url(../images/header-big' + String(image_number) + '.png)';
    }

    setTimeout(setBackground, 1000, image_url);
    num += 1;
}

setInterval(slideshow, 10000);