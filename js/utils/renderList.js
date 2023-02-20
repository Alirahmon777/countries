const BASE_URL = "https://restcountries.com/v3.1/";
let countries = [];

function renderCountries(array, parent = elList) {
  parent.textContent = null;
  const fragment = document.createDocumentFragment();

  const sortedArray = array.sort((a, b) => {
    if (a.name.official < b.name.official) {
      return -1;
    }
    if (a.name.official > b.name.official) {
      return 1;
    }
  });

  sortedArray.forEach((country) => {
    const newCard = elTemplate.content.cloneNode(true);
    const img = newCard.querySelector("#country-img");
    const title = newCard.querySelector(".countries__title");
    const population = newCard.querySelector(".countries__population span");
    const capital = newCard.querySelector(".countries__capital span");

    title.textContent = country.name.official;
    img.src = country.flags.png;
    population.textContent =
      country.population > 1000000
        ? Math.round(country.population / 1000000) + " mln"
        : country.population + " kishi";
    fragment.appendChild(newCard);
    capital.textContent = country.capital;
    if (capital.textContent === "") {
      capital.textContent = country.name.official;
    } else {
      capital.textContent = country.capital;
    }
  });

  elList.appendChild(fragment);
}

fetch(BASE_URL + "all")
  .then((res) => res.json())
  .then((data) => {
    countries = data;
    console.log(countries);
    renderCountries(countries, elList);
  });
