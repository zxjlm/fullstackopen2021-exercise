import React from "react";
import Multi from "./Multi";
import Single from "./Single";

const Show = ({ countries }) => {
  if (countries.length >= 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (countries.length > 1 && countries.length < 10) {
    return <Multi countries={countries}></Multi>;
  } else if (countries.length === 1) {
    return <Single country={countries[0]}></Single>;
  } else {
    return <div></div>;
  }
};

export default Show;
