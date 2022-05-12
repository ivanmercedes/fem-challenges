import CountryDetails from "./src/pages/CountryDetails";
import init from "./src/pages/home";

import "./src/sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  init();

  const btnMode = document.getElementById("mode");

  btnMode.addEventListener("click", (e) => {
    document.body.classList.toggle("dark");
    localStorage.setItem("dark", !(localStorage.getItem("dark") === "true"));
  });

  localStorage.getItem("dark") === "true"
    ? document.body.classList.add("dark")
    : null;

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("country-detail")) {
      CountryDetails(e.target.getAttribute("data-name"));
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("back")) {
      init();
    }
  });
});
