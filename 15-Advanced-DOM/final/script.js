'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('nav');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imageTargets = document.querySelectorAll('img[data-src]');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
///////////////////////////////////////
// Modal window
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btns => {
  btns.addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
//IMPLEMENTING SMOOTH SCROLL
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function () {
  section1.scrollIntoView({ behavior: 'smooth' });
});
//IMPLEMENTING PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(function (anchorEl) {
//   anchorEl.addEventListener('click', function (e) {
//     e.preventDefault()
//     const id = this.getAttribute("href")
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior : "smooth"})
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
//IMPLEMENTING TABBED COMPONENT
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
tabsContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('operations__tab')) {
    tabs.forEach(el => {
      el.classList.remove('operations__tab--active');
    });
    tabsContent.forEach(el => {
      console.log(el);
      el.classList.remove('operations__content--active');
    });
    e.target.classList.add('operations__tab--active');
    // console.log(e.target.dataset.tab);
    document
      .querySelector(`.operations__content--${e.target.dataset.tab}`)
      .classList.add('operations__content--active');
    //
  }
});

//IMPLEMENTING THE FADE OUT FEATURE
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    console.log(e.target);
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => {
      if (link !== el) {
        el.style.opacity = opacity;
      }
      logo.style.opacity = opacity;
    });
  }
};

nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
//IMPLEMENTING STICKY NAVIGATION
const callBackFn = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
};
const observerOptions = {
  root: null,
  threshold: 0.2,
};
const observer = new IntersectionObserver(callBackFn, observerOptions);
observer.observe(section1);
const ObserverFn = function (entries, headerObserver) {
  const [entry] = entries;
  if (entry.isIntersecting === false) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
const observerObj = {
  root: null,
  threshold: 0,
  rootMargin: '-90px',
};
const headerObserver = new IntersectionObserver(ObserverFn, observerObj);
headerObserver.observe(header);
//IMPLEMENTING REVEALING SECTIONS
const obsFn = function (entries, obsOpt) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.remove('section--hidden');
  }
};
const obsOpt = {
  root: null,
  threshold: 0.15,
};
const observerSection = new IntersectionObserver(obsFn, obsOpt);
allSections.forEach(section => {
  section.classList.add('section--hidden');
  observerSection.observe(section);
});

//IMPLEMENTING LAZY LOADING IMAGES
const loadingImg = function (entries, imgObserver) {
  const [entry] = entries;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};
const imgObserver = new IntersectionObserver(loadingImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imageTargets.forEach(img => {
  imgObserver.observe(img);
});
//SLIDER
let currentSlide = 0;
const maxSlides = slides.length;

slides.forEach((slide, i) => {
  slide.style.transform = `translateX(${100 * i}%)`;
});
slider.style.overflow = 'hidden';
btnRight.addEventListener('click', function () {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
});
btnLeft.addEventListener("click", function(){
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
})

//SELECTING ELEMENTS
// const section = document.querySelector('.section');
// // const allSections = document.querySelectorAll(".section")
// // console.log(section);
// // console.log(allSections);
// // const section1 = document.getElementById("section--1")
// // console.log(section1);
// // const navItems = document.getElementsByClassName("nav__item")
// // console.log(navItems);
// // const allButtons = document.getElementsByTagName("button");
// // console.log(allButtons);
// const header = document.querySelector('.header');

// //CREATING AND INSERTING ELEMENTS
// //insertAdjacentHTML
// const myDiv = document.createElement('div');
// // header.append(myDiv.cloneNode(true))
// myDiv.classList.add('cookie-message');
// myDiv.innerHTML = `We use cookies for improved accessibility and functionality <button class="btn--close-cookie">Got it</button>`;
// console.log(myDiv);
// header.append(myDiv);

// //Deleting elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     myDiv.remove();
//   });

//STYLES, ATTRIBUTES AND CLASSES
// myDiv.style.backgroundColor = 'slateblue';
// myDiv.style.width = '100%';
// console.log(myDiv.style.height);
// console.log(myDiv.style.backgroundColor);
// console.log(myDiv.style.width);
// console.log(getComputedStyle(myDiv).height);
// myDiv.style.height = parseFloat(getComputedStyle(myDiv).height) + 20 + 'px';

// const logo = document.querySelector('.nav__logo');
// console.log(logo.src);
// console.log(logo.id);
// console.log(logo.className);

// console.log(logo.getAttribute("src"));
// console.log(logo.getAttribute("id"));
// console.log(logo.getAttribute("class"));

// logo.setAttribute("id", "Enaira");

//classes

//  console.log(logo.classList);
// logo.classList.add("j");
// logo.classList.remove("j");
// logo.classList.toggle("k");
// logo.classList.contains("n");

//TYPES OF EVENT AND EVENT HANDLER
// const h1 = document.querySelector('h1');
// const x = function () {
//   alert('You just moved over the H1 element');
//   h1.removeEventListener('mouseenter', x);
// };
// h1.addEventListener('mouseenter', x);

// h1.onclick = function(){
//   alert("You just moved over the H1 element")
// }

//EVENT PROPAGATION IN PRACTICE
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = 'seagreen';
//   console.log(e.target);
//   console.log(this===e.currentTarget);
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = 'sandybrown';
//   console.log(e.target);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   e.preventDefault();
//   this.style.backgroundColor = 'tomato';
//   console.log(e.target);
// });
