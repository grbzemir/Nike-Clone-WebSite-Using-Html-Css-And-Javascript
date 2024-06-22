console.log('javascript added');

let image1Btn = document.querySelector('#image1');
let image2Btn = document.querySelector('#image2');
let image3Btn = document.querySelector('#image3');
let image4Btn = document.querySelector('#image4');
let bike = document.getElementById('bike');



image1Btn.addEventListener('click', () => {

    console.log('image1 is clicked');
    bike.style.backgroundImage = 'url(images/Converse.webp)';

});

image2Btn.addEventListener('click', () => {

    console.log('image2 is clicked');
    bike.style.backgroundImage = 'url(images/n2.webp)';

});

image3Btn.addEventListener('click', () => {

    console.log('image3 is clicked');
    bike.style.backgroundImage = 'url(images/Jordan.webp)';

});

image4Btn.addEventListener('click', () => {


    console.log('image4 is clicked');
    bike.style.backgroundImage = 'url(images/vans.webp)';

});









