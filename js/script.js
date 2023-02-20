const elTemplate = document.querySelector("#countries-card");
const elList = document.querySelector(".countries__list");
const elDarkBtn = document.querySelector(".header__darkmode");
const elInput = document.querySelector(".countries__searchinput");
const elForm = document.querySelector(".countries__form");
const elFilter = document.querySelector(".countries__filterbox");
const elFilterBtn = document.querySelector(".countries__btns");

elDarkBtn.addEventListener("click", () => {
  document.body.style.cssText = "background-color: #202C36;";
  document.querySelector(".header").style.cssText =
    "background-color: #202C36;";
});

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

elInput.addEventListener("input", () => {
  fetch(`https://restcountries.com/v3.1/name/${elInput.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      if (data.message) {
        throw new Error(data.message);
      }
      renderCountries(data);
    });
});

elFilter.addEventListener("click", () => {
  if (elFilter.className.includes("flex")) {
    elFilterBtn.style.display = "flex";
    elFilter.className = "countries__filterbox none";
  } else if (elFilter.className.includes("none")) {
    elFilterBtn.style.display = "none";
    elFilter.className = "countries__filterbox flex";
  }
});

elFilterBtn.addEventListener("click", (e) => {
  const target = e.target;

  if (target.value === "Africa") {
    fetch(BASE_URL + "region/africa")
      .then((res) => res.json())
      .then((data) => {
        countries = data;
        console.log(countries);
        renderCountries(countries, elList);
      });
  }
  if (target.value === "America") {
    fetch(BASE_URL + "region/america")
      .then((res) => res.json())
      .then((data) => {
        countries = data;
        console.log(countries);
        renderCountries(countries, elList);
      });
  }
  if (target.value === "Asia") {
    fetch(BASE_URL + "region/asia")
      .then((res) => res.json())
      .then((data) => {
        countries = data;
        console.log(countries);
        renderCountries(countries, elList);
      });
  }
  if (target.value === "Europe") {
    fetch(BASE_URL + "region/europe")
      .then((res) => res.json())
      .then((data) => {
        countries = data;
        console.log(countries);
        renderCountries(countries, elList);
      });
  }
  if (target.value === "Oceania") {
    fetch(BASE_URL + "region/oceania")
      .then((res) => res.json())
      .then((data) => {
        countries = data;
        console.log(countries);
        renderCountries(countries, elList);
      });
  }
  if (target.value === "All") {
    fetch(BASE_URL + "all")
      .then((res) => res.json())
      .then((data) => {
        countries = data;
        console.log(countries);
        renderCountries(countries, elList);
      });
  }
});
