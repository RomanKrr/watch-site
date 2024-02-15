const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))




/*-------------Slider--------------*/

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.leftbtn');
const rightArrow = document.querySelector('.rightbtn');
const indicatorParents = document.querySelector('.controls ul');
var imgIndex = 0;
var interval; 

function nextSlide() {
    imgIndex = (imgIndex < 2) ? imgIndex + 1 : 0;
    changeSlide();
}

function prevSlide() {
    imgIndex = (imgIndex > 0) ? imgIndex - 1 : 2;
    changeSlide();
}

function changeSlide() {
    document.querySelector('.controls .selected').classList.remove('selected');
    indicatorParents.children[imgIndex].classList.add('selected');
    slider.style.transform = 'translate(' + (imgIndex) * -100 + '%)';
}

function startSlider() {
    interval = setInterval(nextSlide, 3000); 
}

function stopSlider() {
    clearInterval(interval);
}

rightArrow.addEventListener('click', function() {
    nextSlide();
    stopSlider();
});

leftArrow.addEventListener('click', function() {
    prevSlide();
    stopSlider();
});

document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
    indicator.addEventListener('click', function() {
        imgIndex = ind;
        changeSlide();
        stopSlider();
    });
});

startSlider();





/*---------Text visibility---------*/

const aboutContents = document.querySelectorAll('.about__content');
const aboutNonetxt = document.querySelector('.about__text');
const arrowToggle = document.querySelector('.fa-solid');

aboutContents.forEach(function(aboutContent) {
    aboutContent.addEventListener('click', function() {
        this.querySelector('.about__text').classList.toggle('transform');
        this.querySelector('.fa-solid').classList.toggle('spin');
    });
});



/*--------------------------------------------*/

const navItemsFind = document.querySelector('.nav-item');

for(let item of navItemsFind) {
  item.addEventListener('click', function() {
      const navTitle = document.querySelector('#' + item.dataset.goto);
      const gotoBlockValue = navTitle.getBoundingClientRect().top + scrollY;

      window.scrollTo({
        top: gotoBlockValue,
        left: 0,
        behavior: "smooth"
      })
  })
}