'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// setTimeout(()=>{
// console.log("Hello")
// }, 5000)

// btn.addEventListener("click", function(){

// })
const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v2/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const [info] = JSON.parse(this.responseText);
    console.log(info)
    const htmlText = `<article class="country">
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
  });
};

getCountry('Nigeria');
getCountry('usa');
