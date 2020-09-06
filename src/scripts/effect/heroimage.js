let i = 1;
let images = ['./images/heros/hero-image_1.jpg', './images/heros/hero-image_2.jpg', './images/heros/hero-image_3.jpg', './images/heros/hero-image_4.jpg'];

let imgDiv = document.querySelectorAll('img');

imgDiv[0].src = images[0];

setInterval(() => {
    imgDiv[1].src = images[i];
    imgDiv[1].classList.add('active');
    i++;
    if(i == images.length) i=0;
  
    setTimeout(function() {
      imgDiv[0].src = imgDiv[1].src;
      imgDiv[1].classList.remove('active');
    }, 1500); // the same time as transition animation at css.
}, 2000);