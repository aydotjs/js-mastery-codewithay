'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// setTimeout(()=>{
// console.log("Hello")
// }, 5000)

// btn.addEventListener("click", function(){

// })
const renderCountry = function (info, className = '') {
  const htmlText = `<article class="country, ${className}">
  <img class="country__img" src="${info.flag}" />
  <div class="country__data">
    <h3 class="country__name">${info.name}</h3>
    <h4 class="country__region">${info.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +info.population / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${info.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${info.currencies[0].name}</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML('beforeend', htmlText);
  countriesContainer.style.opacity = 1;
};
const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v2/name/${country}?fullText=true`
  );
  request.send();
  request.addEventListener('load', function () {
    const [info] = JSON.parse(this.responseText);
    console.log(info);
    renderCountry(info);

    //NEIGHBOURING COUNTRY
    const [neighbor] = info.borders;
    console.log(neighbor);
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      `https://restcountries.com/v2/alpha?codes=${neighbor}`
    );
    request2.send();
    request2.addEventListener('load', function () {
      const [info2] = JSON.parse(this.responseText);
      console.log(info2.borders);
      renderCountry(info2, 'neighbour');
      const [neighbour3] = info2.borders;
      //NEIGHBOURING COUNTRY 3
      const request3 = new XMLHttpRequest();
      request3.open(
        'GET',
        `https://restcountries.com/v2/alpha?codes=${neighbour3}`
      );
      request3.send();
      request3.addEventListener('load', function () {
        const [info3] = JSON.parse(this.responseText);
        console.log(info3);
        renderCountry(info3, 'neighbour');
      });
    });
  });
};
getCountry('Togo');

