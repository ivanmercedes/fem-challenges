import getLangName from "../helpers/getLangName";
import getNameByAlpha3Code from "../helpers/getNameByAlpha3Code";

const CountryDetails = (nameArg) => {
  const countries = JSON.parse(sessionStorage.getItem("countries"));
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders,
  } = countries.find((country) => country.name === nameArg);

  let htmlBorders = ``;

  borders?.map(
    (border) =>
      (htmlBorders += `<span  class="badge">${getNameByAlpha3Code(
        border,
      )}</span>`),
  );

  const HTML = `
  <div class="container">
    <button class="back"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
  </svg> Back</button>
    <div class="country-details">
        <div class="col-flag">
         <img src="${flag}" alt="" />
        </div>

        <div class="col-content">
          <h1 class="title">${name}</h1>

          <div class="info-list">
            <ul>
                <li><strong>Native Name</strong>: ${nativeName}</li>
                <li><strong>Population</strong>: ${population}</li>
                <li><strong>Region</strong>: ${region}</li>
                <li><strong>Sub Region</strong>: ${subregion}</li>
                <li><strong>Capital</strong>: ${capital}</li>
            </ul>
          

            <ul>
                <li><strong>Top Level Domian</strong>: ${topLevelDomain[0]}</li>
                <li><strong>Currencies</strong>: ${currencies[0].name}</li>
                <li><strong>Languages</strong>: ${getLangName(languages)}</li>
            </ul>
          </div>
          
          <div class="borders">
           <strong>Border Countries</strong>:  ${htmlBorders || `none`}
          </div> 
           
        </div>
    </div>
  </div>`;

  document.querySelector("#app").innerHTML = HTML;
};

export default CountryDetails;
