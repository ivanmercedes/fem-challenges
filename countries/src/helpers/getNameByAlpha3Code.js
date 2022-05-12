const getNameByAlpha3Code = (code) => {
  const countries = JSON.parse(sessionStorage.getItem("countries"));
  const { name } = countries.find((country) => country.alpha3Code === code);

  return name;
};

export default getNameByAlpha3Code;
