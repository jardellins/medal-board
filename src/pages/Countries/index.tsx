import React from "react";

import { CountryData } from "../../context/medalistsContext";

import Header from "../../components/Header";
import Table from "../../components/Table";

import "./styles.css";

const Countries = () => {
  const { context } = CountryData();
  const { countriesNames, handleValueCountry, selectedCountry } = context;
  return (
    <>
      <Header />

      <h2>The {countriesNames.length} countries that participated this year</h2>

      <div className="list-countries">
        <div className="input">
          <label htmlFor="country">Choose your country</label>
          <input
            id="country"
            type="text"
            list="countries"
            placeholder="Countries"
            onChange={(e) => handleValueCountry(e.target.value)}
          />
          <datalist id="countries">
            <option disabled />
            {countriesNames &&
              countriesNames.map((country, index) => (
                <option key={index} value={country} />
              ))}
          </datalist>
        </div>
        <Table country={selectedCountry} showMedalist />
      </div>
    </>
  );
};

export default Countries;
