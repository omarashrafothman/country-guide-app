let searchBtn = document.getElementById("search-btn");
let countryInput = document.getElementById("country");

searchBtn.addEventListener("click", () => {
  let countryName = "India";
  let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  // console.log(finalUrl);
  fetch(finalUrl)
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log(data);
    });
});
