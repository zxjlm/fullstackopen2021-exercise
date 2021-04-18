import React, { useEffect, useState } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Show from "./components/Show";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setCountries(response.data));
  }, []);

  return (
    <div>
      <Filter setSearchText={setSearchText}></Filter>
      <Show
        countries={countries.filter(
          (elem) => elem.name.toLowerCase().indexOf(searchText) !== -1
        )}
      ></Show>
    </div>
  );
};

export default App;
