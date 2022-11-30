// import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import { Country } from "./components/country/Country";
import axios from "axios";

function App() {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const url = "https://restcountries.com/v2/all";

  useEffect(() => {
    // Definition of the async function
    const fetchCountryDataAxios = async () => {
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setApiData(response.data);
        } else {
          // setApiData to empty array in real case
          setApiData([]);
        }
      } catch (error) {
        console.log("Error from catch: ", error);
      }
    };
    // Calling the async function
    fetchCountryDataAxios();
  }, []);

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <div>
        <fieldset>
          <legend>Search Countries</legend>
          <input type="text" value={search} onChange={handleChange}></input>
        </fieldset>
      </div>
      <div>
        {apiData &&
          apiData
            .filter((item) => item.name.includes(search))
            .map((country) => <Country key={country.name} country={country} />)}
      </div>
    </div>
  );
}

export default App;
