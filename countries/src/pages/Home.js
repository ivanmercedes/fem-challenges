import Country from "../services/Country";

const Home = () => {
  const render = (data) => {
    let HTML = ` <div class="container">
    <div class="country-list">`;
    data.map(({ name, flag, population, region, capital }) => {
      HTML += `
                <div class="country-card">
                   <img src="${flag}" alt="" class="country-detail" data-name="${name}"/>
                   <div class="data">
                    <h2 class="country-detail" data-name="${name}">${name}</h2>
                    <ul class="info">
                        <li><span>Population: </span>${population}</li>
                        <li><span>Region: </span>${region}</li>
                        <li><span>Capital: </span>${capital}</li>
                    </ul>
                   </div>
                </div>
            `;
    });
    HTML += `</div></div>`;
    document.querySelector("#app").innerHTML = HTML;
  };

  const api = new Country("all", render);
  api.fetch();
};

export default Home;
