'use strict';
const btnScrollTo = document.querySelector('.btn--scroll-to');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
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
    console.log(e.target.dataset.tab);
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
const nav = document.querySelector('nav');
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});
const obsOptions = {
  root : null,
  threshold : 0.1
};
const obsCallBack = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const observer = new IntersectionObserver(obsCallBack, obsOptions);
observer.observe(section1);
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
