const fetchCountryData = async () => {
  try {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setApiData(data));
  } catch (error) {
    console.log(error);
  }
};
