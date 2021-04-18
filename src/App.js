import React, { useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";

const App = () => {
  const [conuntries, setConuntries] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.eu/#api-endpoints-all")
      .then((response) => setConuntries(response.data));
  });

  return (
    <div>
      <Filter setSearchText={setSearchText}></Filter>
    </div>
  );
};

export default App;
